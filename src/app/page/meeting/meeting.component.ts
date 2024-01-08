import { RoomTableComponent } from '@/components/room-table/room-table.component';
import { MeetingService } from '@/service/meeting.service';
import { MeetingType } from '@/types/meetingType';
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    JsonPipe,
    RoomTableComponent,
  ],
  providers: [MeetingService],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css',
})
export class MeetingComponent {
  constructor(private meetingService: MeetingService) {}
  formData = new FormGroup({
    startTime: new FormControl('', [Validators.required]),
    endTime: new FormControl('', [Validators.required]),
    date: new FormControl(new Date(), [Validators.required]),
    nbrPeople: new FormControl(0, [Validators.required, Validators.min(2)]),
    type: new FormControl('', [Validators.required]),
  });

  data: MeetingType | null = null;

  formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  get startTime() {
    return this.formData.get('startTime');
  }

  get endTime() {
    return this.formData.get('endTime');
  }

  get date() {
    return this.formData.get('date');
  }

  get nbrPeople() {
    return this.formData.get('nbrPeople');
  }

  get type() {
    return this.formData.get('type');
  }

  submitData() {
    const formatedData = {
      startTime: this.startTime?.value ?? '',
      endTime: this.endTime?.value ?? '',
      date: this.formatDate(this.date?.value ?? new Date()),
      nbrPeople: this.nbrPeople?.value ?? 0,
      type: this.type?.value ?? '',
    };

    console.log(this.startTime?.value);

    if (this.formData.invalid) {
      console.log('Form is invalid. Please check the errors.');
      return;
    }

    this.meetingService.addMeeting(formatedData).subscribe((resp) => {
      console.log(resp);
      this.data = resp;
    });
  }
}
