/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMessagesComponent } from './validation-message.component';
import { FormControl } from '@angular/forms';
import { PrimeNgModule } from '../../../primeng.module';

describe('[VALIDATION] ValidationMessagesComponent', () => {
  let component: ValidationMessagesComponent;
  let fixture: ComponentFixture<ValidationMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PrimeNgModule],
      declarations: [ValidationMessagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ValidationMessagesComponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('return null', () => {
    component.control = new FormControl(null);
    expect(component.errorMessage).toBeNull();
  });

  it('return error message ', () => {
    component.control = new FormControl();
    component.control.markAsTouched();
    component.control.setErrors({
      required: true
    });
    expect(component.errorMessage).toEqual('This field cannot be left blank');
  });

  it('return null if control not touched ', () => {
    component.control = new FormControl();
    component.control.setErrors({
      required: true
    });
    expect(component.errorMessage).toBeNull();
  });
});
