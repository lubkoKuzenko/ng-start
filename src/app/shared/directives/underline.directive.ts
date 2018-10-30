import {
  Directive,
  ElementRef,
  Renderer,
  HostListener,
  HostBinding
} from '@angular/core';

// Annotation section
@Directive({ selector: '[underline]' })

/*
    *element-name: select by element name.
    *.class: select by class name.
    *[attribute]: select by attribute name.
    *[attribute=value]: select by attribute name and value.
    *:not(sub_selector): select only if the element does not match the sub_selector.
    *selector1, selector2: select if either selector1 or selector2 matches.
*/

// Directive class
export class UnderlineDirective {
  // for input params
  // @Input() my: boolean;
  constructor(private el: ElementRef, private renderer: Renderer) {}

  // HostBinding - will bind property to host element, If a binding changes, HostBinding will update the host element.
  // @HostBinding('style.backgroundColor')
  // color = 'yellow';

  // HostListener - will listen to the event emitted by host element, declared with @HostListener.
  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover(false);
  }

  hover(shouldUnderline: boolean) {
    if (shouldUnderline) {
      this.renderer.setElementStyle(
        this.el.nativeElement,
        'text-decoration',
        'underline'
      );
    } else {
      this.renderer.setElementStyle(
        this.el.nativeElement,
        'text-decoration',
        'none'
      );
    }
  }
}
