import { Component } from '@angular/core';
import {  trigger,   transition } from '@angular/animations';
import { COMPONENTS } from './conf';
import { right, left } from './shared/animations/level1';

@Component({
  selector: 'blend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition(':increment', right),
      transition(':decrement', left),
    ])
  ]
})
export class AppComponent {

  private components: Array<any> = COMPONENTS;
  private animationState: number;

  onActivate($event) {
    this.components.forEach( (solution, index) => {
      if (solution.component === $event.constructor.name) {
        return this.animationState =  index;
      }
    });
  }
}
