import { Component } from '@angular/core';
import { AppComponent } from '../core/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private app: AppComponent) {
    this.app.pageTitle = "Home";
  }
}
