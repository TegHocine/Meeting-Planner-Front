import { PaginationComponent } from '@/components/pagination/pagination.component';
import { RoomTableComponent } from '@/components/room-table/room-table.component';
import { MeetingService } from '@/service/meeting.service';
import { PaginationResponse } from '@/types/global';
import { MeetingType } from '@/types/meetingType';
import { Request } from '@/utils/Request';
import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-meeting-list',
  standalone: true,
  imports: [RoomTableComponent, PaginationComponent],
  providers: [MeetingService],
  templateUrl: './meeting-list.component.html',
  styleUrl: './meeting-list.component.css',
})
export class MeetingListComponent {
  meetings = new Request<PaginationResponse<MeetingType>>();
  pageSize = 10;
  page = 1;

  constructor(private meetingService: MeetingService) {
    this.meetings.use(
      this.meetingService.getMeetingPagination(this.page, this.pageSize)
    );
  }

  handlePageEvent(e: PageEvent) {
    this.meetings.use(
      this.meetingService.getMeetingPagination(e.pageIndex, e.pageSize)
    );
  }
}
