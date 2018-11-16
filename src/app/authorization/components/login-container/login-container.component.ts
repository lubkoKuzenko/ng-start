import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { User } from '../../../interfaces/user.interface';
import * as AuthorizationActions from '../../authorization.actions';

@Component({
  selector: 'bb-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'login',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Login',
        placeholder: 'Enter login',
        required: true
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter Password',
        required: true
      }
    }
  ];

  constructor(private http: HttpClient, private store: Store<any>) {}

  ngOnInit() {}

  submit(model: User) {
    this.store.dispatch(new AuthorizationActions.Login(model));
  }
}
