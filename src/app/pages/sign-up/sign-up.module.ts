import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { SignFooterModule } from 'src/app/components/sign-footer/sign-footer.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SignFooterModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
