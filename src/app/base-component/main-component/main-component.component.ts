import { trigger, transition, query, style, animateChild, group, animate } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%', top: '0', left: '0' }), { optional: true }),
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [animate('.5s ease-out', style({ opacity: 0 }))], { optional: true }),
          query(':enter', [animate('.5s ease-out', style({ opacity: 1 }))], { optional: true })
        ]),
        query(':enter', animateChild(), { optional: true })
      ]),
    ])]
})
export class MainComponentComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  getAnimationState(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animateState;
  }

}
