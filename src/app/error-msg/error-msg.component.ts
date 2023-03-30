import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html'
})
export class ErrorMsgComponent implements OnInit {

  @Input() list!: any;
  @Input() controlRef!: AbstractControl;

  constructor() { }

  ngOnInit(): void {
  }

  attrError(type: string): boolean {
    return this.controlRef.hasError(type)
      && (this.controlRef.touched || this.controlRef.dirty);
  }
}
