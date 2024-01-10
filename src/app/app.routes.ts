import { Routes } from '@angular/router';
import { MeetingListComponent } from './page/meeting-list/meeting-list.component';
import { MeetingComponent } from './page/meeting/meeting.component';

export const routes: Routes = [
  { path: '', component: MeetingComponent },
  { path: 'meetings', component: MeetingListComponent },
];
