import { Pipe, PipeTransform } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Pipe({
  name: "validateInput",
  pure: false
})
export class ValidateInputPipe implements PipeTransform {
  transform(control: AbstractControl, typeValid: boolean): boolean {
    return typeValid
      ? control.valid && (control.dirty || control.touched)
      : control.invalid && (control.dirty || control.touched);
  }
}
