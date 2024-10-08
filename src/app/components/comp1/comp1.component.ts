import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss',
})
export class Comp1Component {
  title: string = 'comp1';
  saluto: string = 'ciao';
  additional: string = 'works!';
}
