import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = '';

  resetUsername(): void {
    this.username = '';
  }

  isEmpty(): boolean {
    return this.username.length === 0;
  }
}
