import { Pipe, PipeTransform } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

@Pipe({
  name: "validateInput",
  pure: false
})
export class ValidateInputPipe implements PipeTransform {
  transform(
    form: FormGroup,
    field: string
  ): { valid: boolean; invalid: boolean } {
    const control: AbstractControl | null = form.get(field);
    if (!control) return { valid: false, invalid: false };

    const isValid = control.valid && (control.dirty || control.touched);
    const isInvalid = control.invalid && (control.dirty || control.touched);

    return { valid: isValid, invalid: isInvalid };
  }
}
