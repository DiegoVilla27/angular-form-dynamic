import { ValidatorFn } from "@angular/forms";
import { IValidation } from "../components/error-msg/error-msg.component";

export interface IForm {
  data: IInput[];
}

export interface IInput {
  name: string;
  value: string;
  placeholder: string;
  type: string;
  required: boolean;
  messagesError: IValidation[];
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface IControl {
  [key: string]: [string | number | null | undefined, ValidatorFn[]];
}
