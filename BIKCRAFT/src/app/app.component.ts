import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bikcraft';

  informacao?:string;

  getInformacao():void{
    this.informacao = 'informacao gap'
  }

}
