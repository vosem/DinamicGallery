import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images = [
  	{
      name: 'spring',
      url: 'https://github.com/vosem/DinamicGallery/blob/master/src/assets/1.png?raw=true'
    },
    {
      name: 'summer',
      url: 'https://github.com/vosem/DinamicGallery/blob/master/src/assets/2.png?raw=true'
    },
    {
      name: 'autumn',
      url: 'https://github.com/vosem/DinamicGallery/blob/master/src/assets/3.png?raw=true'
    },
    {
      name: 'winter',
      url: 'https://github.com/vosem/DinamicGallery/blob/master/src/assets/4.png?raw=true'
    }
  ]
}
