import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'bb-formly',
  templateUrl: './formly-container.component.html',
  styleUrls: ['./formly-container.component.scss']
})
export class FormlyContainer implements OnInit {
  public form = new FormGroup({});
  public model = {};
  public fields: FormlyFieldConfig[] = [];
  public options: FormlyFormOptions = {
    formState: {}
  };

  @Input()
  json;

  constructor() {}

  ngOnInit() {
    this.fields.push(this.json);
  }

  submit() {
    if (this.form.valid) {
      console.log(this.model);
    }
  }
}
