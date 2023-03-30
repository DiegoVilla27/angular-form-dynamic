export interface IValidation {
  type: string;
  message: string;
}

export const confirmPasswordErrors: IValidation[] = [
  { type: 'required', message: 'Password confirm is required' },
  { type: 'minlength', message: 'Min = 8 characters' },
  { type: 'maxlength', message: 'Max = 20 characters' }
];