import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards = [
  	{name: 'Alexa'},
  	{name: 'Alexa1'},
  	{name: 'Alexa2'},
  	{name: 'Alexa3'},
  	{name: 'Alexa4'},
  ]
}
