import { RoomTableComponent } from '@/components/room-table/room-table.component';
import { MeetingService } from '@/service/meeting.service';
import { MeetingType } from '@/types/meetingType';
import { Request } from '@/utils/Request';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting-list',
  standalone: true,
  imports: [RoomTableComponent],
  providers: [MeetingService],
  templateUrl: './meeting-list.component.html',
  styleUrl: './meeting-list.component.css',
})
export class MeetingListComponent {
  meetings = new Request<MeetingType[]>();

  constructor(private meetingService: MeetingService) {
    this.meetings.use(this.meetingService.getMeeting());
  }
}
