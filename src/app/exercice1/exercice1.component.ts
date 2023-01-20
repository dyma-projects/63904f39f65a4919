import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  public title: string = 'Merci Dyma pour la formation !';
  public linkToGithub: string[] = ['https://github.com/Saimoen'];

  constructor() {}

  ngOnInit(): void {}

  log() {
    console.log('clic');
  }
}
