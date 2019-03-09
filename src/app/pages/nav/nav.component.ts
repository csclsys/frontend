import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

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
      name: 'Cursos',
      icon: 'wb_incandescent',
      router: './cursos',
      toolTip: 'Cursos para aprender e crescer'
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
  }
}
