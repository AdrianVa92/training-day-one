import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training-day-one-activity';

  appColor = 'black';

  submit(value:string): void{
    this.appColor = value;
  }
}
