import { PaginationResponse } from '@/types/global';
import { MeetingType } from '@/types/meetingType';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type AddMeetingBody = {
  startTime: string;
  endTime: string;
  date: string;
  nbrPeople: number;
  type: string;
};

@Injectable({
  providedIn: 'root',
})
export class MeetingService {
  constructor(private http: HttpClient) {}

  addMeeting(meeting: AddMeetingBody): Observable<MeetingType> {
    return this.http.post<MeetingType>(
      `http://localhost:8080/api/v1/meeting`,
      meeting
    );
  }
  getMeeting(): Observable<MeetingType[]> {
    return this.http.get<MeetingType[]>(`http://localhost:8080/api/v1/meeting`);
  }
  getMeetingPagination(
    page = 1,
    size = 10
  ): Observable<PaginationResponse<MeetingType>> {
    return this.http.get<PaginationResponse<MeetingType>>(
      `http://localhost:8080/api/v1/meeting/pagination`,
      {
        params: {
          page,
          size,
        },
      }
    );
  }
}
