import { Component, Input, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'preload-image',
  templateUrl: './preload-image.component.html',
  styleUrls: ['./preload-image.component.scss'],
})
export class PreloadImageComponent {

  _src = '';
  _alt = '';

  @HostBinding('class.img-loaded') imageLoaded = false;

  @Input()
  set src(val: string) {
    this._src = (val !== undefined && val !== null) ? val : '';
  }

  @Input()
  set alt(val: string) {
    this._alt = (val !== undefined && val !== null) ? val : '';
  }

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef
  ) {}

  _imageLoaded() {
    this.imageLoaded = true;
    this._renderer.addClass(this._elementRef.nativeElement, 'img-loaded');
  }

}
