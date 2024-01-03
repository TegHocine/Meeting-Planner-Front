import { MeetingService } from '@/service/meeting.service';
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
  ],
  providers: [MeetingService],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css',
})
export class MeetingComponent {
  constructor(private meetingService: MeetingService) {}
  formData = new FormGroup({
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
    date: new FormControl(new Date(), Validators.required),
    nbrPeople: new FormControl(0, Validators.required),
    type: new FormControl('', Validators.required),
  });

  data: any = '';

  formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  submitData() {
    const formatedData = {
      startTime: this.formData.value.startTime ?? '',
      endTime: this.formData.value.endTime ?? '',
      date: this.formatDate(this.formData.value.date ?? new Date()),
      nbrPeople: this.formData.value.nbrPeople ?? 0,
      type: this.formData.value.type ?? '',
    };
    console.log(this.formData.errors, formatedData);
    if (this.formData.errors) return;

    this.meetingService.addMeeting(formatedData).subscribe((resp) => {
      console.log(resp);
      this.data = resp;
    });
  }
}
