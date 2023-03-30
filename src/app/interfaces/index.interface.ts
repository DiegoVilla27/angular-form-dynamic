export interface IData {
  name: string;
  value: string;
  type: string;
  required: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  messagesError?: any;
}