import { Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { IMessagesError } from "../../interfaces/form.interface";

@Component({
  selector: "app-message-alert",
  templateUrl: "./message-alert.component.html",
  styleUrl: "./message-alert.component.scss"
})
export class MessageAlertComponent {
  @Input() list!: IMessagesError[];
  @Input() controlRef!: AbstractControl;
}
