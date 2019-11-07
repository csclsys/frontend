import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {DialogoService} from '../../../services/dialog/dialogo.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-matricula-aluno',
  templateUrl: './matricula-aluno.component.html',
  styleUrls: ['./matricula-aluno.component.css']
})
export class MatriculaAlunoComponent implements OnInit {
  constructor(private api: ApiService, public dialogo: DialogoService) {
  }

  displayedColumns: string[] = ['matricula', 'nomeAluno', 'cpf', 'turma', 'semestre', 'professor', 'disciplina'];
  dataSource;
  alunos: any[] = [];
  turmas: any[] = [];
  professores: any[] = [];
  disciplinas: any[] = [];
  matriculasAlunos: any[] = [];
  tabela: any[] = [];


  ngOnInit() {
    this.buscarAlunos();
  }


  buscarAlunos() {
    this.api.get('usuarios/porPapel', {papel: 'aluno'}).subscribe({
      next: (res: any) => {
        console.log(res);
        this.alunos = res;
        this.buscarTurmas();
      },
      error: err => console.log(err)
    });
  }

  buscarTurmas() {
    this.api.get('turmas/').subscribe({
      next: (res: any) => {
        console.log(res);
        this.turmas = res;
        this.buscarProfessores();
      },
      error: err => console.log(err)
    });
  }

  buscarProfessores() {
    this.api.get('usuarios/porPapel', {papel: 'professor'}).subscribe({
      next: (res: any) => {
        console.log(res);
        this.professores = res;
        this.buscarDisciplinas();
      },
      error: err => console.log(err)
    });
  }

  buscarDisciplinas() {
    this.api.get('disciplinas/').subscribe({
      next: (res: any) => {
        console.log(res);
        this.disciplinas = res;
        this.buscarMatriculas();
      },
      error: err => console.log(err)
    });
  }

  buscarMatriculas() {
    this.api.get('matriculaAlunos').subscribe({
      next: (res: any) => {
        console.log(res);
        this.matriculasAlunos = res;
        this.juntarInformacoes();
      },
      error: err => console.log(err)
    });
  }

  async juntarInformacoes() {
    for (const item of this.matriculasAlunos) {

      const alunoInfo = this.alunos[this.alunos.findIndex(x => x.id === item.usuarioId)];
      const turmaInfo = this.turmas[this.turmas.findIndex(x => x.id === item.turmaId)];
      const professorInfo = this.professores[this.professores.findIndex(x => x.id === turmaInfo.professorId)];
      const disciplinaInfo = this.disciplinas[this.disciplinas.findIndex(x => x.id === turmaInfo.disciplinaId)];

      this.tabela.push({
        nomeAluno: `${alunoInfo.nome} ${alunoInfo.sobrenome}`,
        matricula: alunoInfo.matricula,
        cpf: alunoInfo.cpf,
        turma: turmaInfo.nome,
        semestre: turmaInfo.semestre,
        ano: turmaInfo.ano,
        professor: `${professorInfo.nome} ${professorInfo.sobrenome}`,
        disciplina: disciplinaInfo.nome
      });
    }
    console.log(this.tabela);

    this.dataSource = new MatTableDataSource(this.tabela);

  }

  importarMatriculas() {

    this.api.post('matriculaAlunos/importarMatriculaAlunos', {})
      .subscribe((result: any[]) => {
        this.dialogo.abrirDialogoComum('sccs', `${result.length} matricula(s) importado(s) com sucesso!`);

        this.ngOnInit();

      }, error => {
        this.dialogo.abrirDialogoComum('erro', 'Ocorreu um erro na sua solicitação, por favor, tente mais tarde!');
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
