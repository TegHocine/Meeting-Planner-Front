import { MeetingComponent } from '@/page/meeting/meeting.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MeetingComponent, HttpClientModule],
  template: `
    <main class="main">
      <app-meeting> </app-meeting>
    </main>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
