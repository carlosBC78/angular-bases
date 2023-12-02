import { Component } from '@angular/core';
// import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string  = 'AppComponent';
  // public counter: number = 10;

  // //public
  // increaseBy(value: number): void {
  //   this.counter += value;
  // }

  // resetCounter(): void{
  //   this.counter = 10;
  // }
}
