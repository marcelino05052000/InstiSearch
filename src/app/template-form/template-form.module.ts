import { ButtonModule } from 'primeng/primeng';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule
  ],
  declarations: [
    TemplateFormComponent
  ]
})
export class TemplateFormModule { }
