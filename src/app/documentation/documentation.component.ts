import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { tree } from '../formly/forms/tree';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'bb-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  public currentPage = 0;
  public model = {};
  form;
  options;
  public fields: FormlyFieldConfig[] = [];

  pages;
  constructor() {}

  ngOnInit() {
    this.pages = tree.pages;

    this.form = new FormArray(this.pages.map(() => new FormGroup({})));
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    this.options = this.pages.map(() => <FormlyFormOptions>{});

    console.log(this.form);
  }

  submit() {
    this.currentPage = ++this.currentPage;
    console.log(this.currentPage);
  }

  back() {
    this.currentPage = --this.currentPage;
  }
}
