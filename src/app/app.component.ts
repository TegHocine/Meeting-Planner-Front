import { MeetingComponent } from '@/page/meeting/meeting.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MeetingComponent,
    HttpClientModule,
    HeaderComponent,
  ],
  styleUrl: './app.component.css',
  template: `
    <main class="main">
      <app-header></app-header>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
})
export class AppComponent {}
