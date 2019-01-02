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
      url: 'https://github.com/vosem/DinamicGallery/blob/master/src/assets/spring.png?raw=true'
    },
    {
      name: 'summer',
      url: 'https://github.com/vosem/DinamicGallery/blob/master/src/assets/summer.png?raw=true'
    },
    {
      name: 'autumn',
      url: 'https://github.com/vosem/DinamicGallery/blob/master/src/assets/autumn.png?raw=true'
    },
    {
      name: 'winter',
      url: 'https://github.com/vosem/DinamicGallery/blob/master/src/assets/winter.png?raw=true'
    }
  ]
}
