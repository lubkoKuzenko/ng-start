import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bb-h1',
  template: '<h1>{{title}}</h1>',
  styles: [':host { font-weight: bold; }']
})
export class H1 implements OnInit {
  @Input()
  title = 'Default title';

  constructor() {}

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------

  ngOnInit() {}
}
