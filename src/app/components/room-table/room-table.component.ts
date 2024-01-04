import { MeetingType } from '@/types/meetingType';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-room-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './room-table.component.html',
  styleUrl: './room-table.component.css',
})
export class RoomTableComponent {
  displayedColumns: string[] = [
    'id',
    'startTime',
    'endTime',
    'date',
    'nbrPeople',
    'type',
    'roomName',
    'equipmentList',
  ];
  @Input() dataSource: MeetingType[] | null = null;
}
