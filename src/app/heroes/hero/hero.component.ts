import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName(): string{
    // return 'Hola Mundo'.toUpperCase();
    return this.name.toUpperCase();

    //el get es como las propiedades
    // this.
  }

  public getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  public changeHero(): void{
    this.name = 'Spiderman'
  }

  public changeAge(): void{
    this.age = 50;
  }

  public resetForm(): void{
    this.name = 'ironman';
    this.age = 45

    // document.querySelectorAll('h1')!.forEach (element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // })
  }

}
