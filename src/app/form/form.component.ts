import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators
} from "@angular/forms";
import { IControl, IInput } from "../interfaces/form.interface";
import { FormService } from "../services/form.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.scss"
})
export class FormComponent {
  data: IInput[] = [];
  form!: FormGroup;

  constructor(
    private _formSvc: FormService,
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({});
  }

  ngOnInit(): void {
    this._formSvc.getForm().subscribe((form: IInput[]) => {
      this.data = form;
      this.buildData(form);
    });
  }

  buildData(form: IInput[]): void {
    const controls: IControl = this.buildControls(form);
    this.form = this._fb.group<IControl>(controls);
  }

  buildControls(form: IInput[]): IControl {
    let controls: IControl = {};
    form.forEach((input: IInput) => {
      controls = {
        ...controls,
        [input.name]: [input.value ?? "", this.buildValidations(input)]
      };
    });

    return controls;
  }

  buildValidations(input: IInput): ValidatorFn[] {
    const validations: ValidatorFn[] = [];

    input.min && validations.push(Validators.min(input.min));
    input.max && validations.push(Validators.max(input.max));
    input.minLength && validations.push(Validators.minLength(input.minLength));
    input.maxLength && validations.push(Validators.maxLength(input.maxLength));
    input.pattern && validations.push(Validators.pattern(input.pattern));
    input.name === "email" && validations.push(Validators.email);

    return validations;
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    alert("FORM OK");
  }
}
