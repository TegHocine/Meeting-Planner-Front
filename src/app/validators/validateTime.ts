import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function timeRangeValidator(
  range: 'startTime' | 'endTime'
): ValidatorFn {
  const timeRanges = {
    startTime: {
      minStart: '8:00',
      maxEnd: '19:00',
    },
    endTime: {
      minStart: '9:00',
      maxEnd: '20:00',
    },
  };
  return (control: AbstractControl): ValidationErrors | null => {
    const time = +control.value.split(':')?.[0];

    const startingHour = +timeRanges[range].minStart.split(':')[0];
    const endingHour = +timeRanges[range].maxEnd.split(':')[0];

    if (time < startingHour || time > endingHour) {
      return { timeRange: true };
    }

    return null;
  };
}
