import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[ifStr]'
})
export class StrDirective {

  constructor(private _view: ViewContainerRef, private _tempRef: TemplateRef<any>) { }
  @Input() set ifStr(val: boolean) {
    if (val) {
      this._view.createEmbeddedView(this._tempRef);
    }
    else {
      this._view.clear();
    }
  }
}
