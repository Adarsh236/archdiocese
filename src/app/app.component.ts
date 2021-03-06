import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'archdiocese';

  constructor(private router: Router) {}

  public navigateToHome() {
    this.router.navigate(['']);
  }
  public navigateTo() {
    this.router.navigate(['second-task']);
  }
}
