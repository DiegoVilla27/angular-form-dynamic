import { AbstractControl } from '@angular/forms';

export const validInput = (controlRef: AbstractControl): boolean => {
  return controlRef.valid && (controlRef.dirty || controlRef.touched);
}

export const invalidInput = (controlRef: AbstractControl): boolean => {
  return controlRef.invalid && (controlRef.dirty || controlRef.touched);
}