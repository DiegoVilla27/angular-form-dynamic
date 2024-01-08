import { ValidatorFn } from "@angular/forms";

export interface IForm {
  data: IInput[];
}

export interface IInput {
  name: string;
  value: string;
  placeholder: string;
  type: string;
  required: boolean;
  messagesError: IMessagesError[];
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface IMessagesError {
  type: string;
  message: string;
}

export interface IControl {
  [key: string]: [string | number | null | undefined, ValidatorFn[]];
}
