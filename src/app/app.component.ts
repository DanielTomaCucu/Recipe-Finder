import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  showContent = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showContent = window.innerWidth <= 767;
  }
}
