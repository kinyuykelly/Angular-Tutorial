import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [
    RouterLinkActive,
    RouterOutlet,
    RouterLinkWithHref
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('project1');
}
