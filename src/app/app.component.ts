import { isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'клиент';

  constructor(@Inject(PLATFORM_ID) platformId) {
    if (isPlatformServer(platformId)) {
      this.title = 'SSR';
    }
  }
}
