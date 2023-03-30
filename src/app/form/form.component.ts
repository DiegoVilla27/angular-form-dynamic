import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { List } from 'immutable';
import { IData } from '../interfaces/index.interface';
import { DataService } from '../services/data.service';
import { invalidInput, validInput } from '../utils/validation-inputs.utils';
import { confirmPasswordErrors, IValidation } from './validations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: []
})
export class FormComponent implements OnInit {

  public data: List<IData> = List();
  public form!: FormGroup;

  // VALIDATIONS
  public invalidInput = invalidInput;
  public validInput = validInput;
  public confirmPasswordErrors: IValidation[] = confirmPasswordErrors;

  constructor(
    private _dataSvc: DataService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.data = this._dataSvc.data;
    this.loadData(this.data);
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    console.log('FORM', this.form);
  }

  loadData(data: List<IData>): void {
    let controls: object = this.mapDataInControls(data);
    this.form = this._fb.group(controls, { validators: [this.cannotMatch()] });
  }

  mapDataInControls(data: List<IData>): object {
    let controls: object = {};

    data.forEach((res: IData) => {
      controls = {
        ...controls,
        [res.name]: [res.value ?? '', this.pushValidators(res)]
      };
    });

    controls = {
      ...controls,
      password_confirm: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]],
    };
    
    return controls;
  }

  pushValidators(res: IData): ValidatorFn[] {
    let arr: ValidatorFn[] = [];

    (res.min) && arr.push(Validators.min(res.min));
    (res.max) && arr.push(Validators.max(res.max));
    (res.minLength) && arr.push(Validators.minLength(res.minLength));
    (res.maxLength) && arr.push(Validators.maxLength(res.maxLength));
    (res.pattern) && arr.push(Validators.pattern(res.pattern));
    (res.name === 'email') && arr.push(Validators.email);
    (res.name === 'name') && arr.push(this.forbiddenName('diego villa'));

    return arr;
  }

  cannotMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const password_confirm = control.get('password_confirm')?.value;
      const res = password !== password_confirm;
      return res ? { cannotMatch: res } : null;
    };
  }

  forbiddenName(text: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = (control.value).toLowerCase() === text;
      return forbidden ? { forbidden: forbidden } : null;
    };
  }

}
