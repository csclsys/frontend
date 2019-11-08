import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {DialogoService} from '../../services/dialog/dialogo.service';
import {MatTableDataSource} from '@angular/material';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    public router: Router,
    public dialogo: DialogoService,
    public api: ApiService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  currentSubject = 'Nenhuma disciplina escolhida';

  alunos: any[] = [];
  turmas: any[] = [];
  professores: any[] = [];
  disciplinas: any[] = [];
  matriculasAlunos: any[] = [];
  tabela: any[] = [];

  subjects = [
    {
      id: '1',
      title: 'Complexidade de Algoritmos'
    },
    {
      id: '2',
      title: 'Estrutura de Dados'
    },
    {
      id: '3',
      title: 'Linguagens de programação II'
    },
    {
      id: '4',
      title: 'Calculo III'
    },
    {
      id: '5',
      title: 'Física III'
    }
  ];

  menuItens = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      router: './dashboard',
      toolTip: 'Navegar para o dashboard'
    },
    {
      name: 'Temas',
      icon: 'bookmark',
      router: './temas',
      toolTip: 'Temas para uso nos Foruns, Chat e Video Chat'
    },
    {
      name: 'Salas',
      icon: 'forum',
      router: './chats',
      toolTip: 'Chat com os monitores e professores para tirar dúvidas'
    },
    {
      name: 'Video Chat',
      icon: 'voice_chat',
      router: './videochats',
      toolTip: 'Video Chat com os monitores e professores para tirar dúvidas'
    }
  ];

  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  isLogin() {
    return window.location.pathname === '/login';
  }

  logout() {
    localStorage.clear();
    this.dialogo.abrirDialogoComum('info', 'Você saiu!');
    this.router.navigateByUrl('/');
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
        usuarioId: alunoInfo.id,
        nomeAluno: `${alunoInfo.nome} ${alunoInfo.sobrenome}`,
        matricula: alunoInfo.matricula,
        cpf: alunoInfo.cpf,
        turmaId: turmaInfo.id,
        turma: turmaInfo.nome,
        semestre: turmaInfo.semestre,
        ano: turmaInfo.ano,
        professor: `${professorInfo.nome} ${professorInfo.sobrenome}`,
        disciplina: disciplinaInfo.nome,
        disciplinaId: turmaInfo.disciplinaId
      });
    }
    console.log(this.tabela);

  }


  ngOnInit(): void {

    this.buscarAlunos();

    if (!JSON.parse(localStorage.getItem('@discite:currentSubject')).disciplina) {
      CURRENT_SUBJECT = 'Nenhuma disciplina escolhida';
    }


    CURRENT_SUBJECT = JSON.parse(localStorage.getItem('@discite:currentSubject')).disciplina || 'Nenhuma disciplina escolhida';
    this.currentSubject = JSON.parse(localStorage.getItem('@discite:currentSubject')).disciplina || 'Nenhuma disciplina escolhida';
  }

  async setSubject(option) {
    await localStorage.setItem('@discite:currentSubject', JSON.stringify(option));

    CURRENT_SUBJECT = JSON.parse(localStorage.getItem('@discite:currentSubject')).disciplina || 'Nenhuma disciplina escolhida';
    this.currentSubject = JSON.parse(localStorage.getItem('@discite:currentSubject')).disciplina || 'Nenhuma disciplina escolhida';

    location.reload();
  }

}


export let CURRENT_SUBJECT = 'Nenhuma disciplina escolhida';

