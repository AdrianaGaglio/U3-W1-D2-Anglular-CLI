import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss',
})
export class Comp2Component {
  title: string = 'comp2';
  saluto: string = 'ciao';
  additional: string = 'works!';
}
