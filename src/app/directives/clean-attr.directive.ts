import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appCleanAttr]"
})
export class CleanAttrDirective {
  elCurrent!: HTMLElement;

  constructor(private _el: ElementRef) {}

  ngAfterViewInit(): void {
    this.elCurrent = this._el.nativeElement;
    this.cleanAttributes();
  }

  cleanAttributes(): void {
    this.conditionalAttribute("pattern") && this.removeAttribute("pattern");
    this.conditionalAttribute("min") && this.removeAttribute("min");
    this.conditionalAttribute("max") && this.removeAttribute("max");
    this.conditionalAttribute("step") && this.removeAttribute("step");
    this.conditionalAttribute("minlength") && this.removeAttribute("minlength");
    this.conditionalAttribute("maxlength") && this.removeAttribute("maxlength");
  }

  conditionalAttribute(name: string): boolean {
    return this.elCurrent.getAttribute(name) === "";
  }

  removeAttribute(name: string): void {
    this.elCurrent.removeAttribute(name);
  }
}
