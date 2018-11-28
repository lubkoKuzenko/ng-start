import { Component, OnInit } from '@angular/core';

import { fisrtName } from '../formly/forms/first-name';

@Component({
  selector: 'bb-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  form = fisrtName;
  constructor() {}

  ngOnInit() {}
}
