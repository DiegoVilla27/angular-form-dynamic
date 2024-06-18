import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appCleanAttr]"
})
export class CleanAttrDirective {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.cleanAttributes();
  }

  private cleanAttributes(): void {
    const elCurrent: HTMLElement = this.el.nativeElement;
    const attributes: NamedNodeMap = elCurrent.attributes;

    for (let i = attributes.length - 1; i >= 0; i--) {
      const attribute = attributes[i];
      if (this.isEmptyOrNull(attribute.value)) {
        elCurrent.removeAttribute(attribute.name);
      }
    }
  }

  private isEmptyOrNull(value: string | null): boolean {
    return value === null || value.trim() === "";
  }
}
