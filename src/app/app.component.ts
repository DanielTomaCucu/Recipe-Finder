import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  showContent = true;

  ngOnInit() {
    this.showContent = window.innerWidth <= 767;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showContent = window.innerWidth <= 767;
  }
}
