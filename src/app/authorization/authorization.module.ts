import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SharedModule } from '../shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthorizationEffects } from './authorization.effects';
import { AuthorizationReducer } from './authorization.reducer';

@NgModule({
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      validationMessages: [
        { name: 'required', message: 'This field is required' }
      ]
    }),
    SharedModule,
    StoreModule.forFeature('authorization', AuthorizationReducer),
    EffectsModule.forFeature([AuthorizationEffects])
  ],
  declarations: [LoginContainerComponent]
})
export class AuthorizationModule {}
