import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  currentSubject = 'Nenhuma disciplina escolhida';

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
      name: 'Forum',
      icon: 'forum',
      router: './forum',
      toolTip: 'Forum para tirar dúvidas'
    },
    {
      name: 'Chat',
      icon: 'chat',
      router: './cursos',
      toolTip: 'Chat com os monitores e professores para tirar dúvidas'
    },
    {
      name: 'Video Chat',
      icon: 'voice_chat',
      router: './usuarios',
      toolTip: 'Video Chat com os monitores e professores para tirar dúvidas'
    }
  ];

  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }


  ngOnInit(): void {

    if (!JSON.parse(localStorage.getItem('@discite:currentSubject')).title) {
      CURRENT_SUBJECT = 'Nenhuma disciplina escolhida';
    }


    CURRENT_SUBJECT = JSON.parse(localStorage.getItem('@discite:currentSubject')).title || 'Nenhuma disciplina escolhida';
    this.currentSubject = JSON.parse(localStorage.getItem('@discite:currentSubject')).title || 'Nenhuma disciplina escolhida';
  }

  async setSubject(option) {
    await localStorage.setItem('@discite:currentSubject', JSON.stringify(option));
    location.reload();
  }

}


export let CURRENT_SUBJECT = 'Nenhuma disciplina escolhida';

