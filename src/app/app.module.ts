import { AuthService } from './login/auth.service';
import { TemplateFormModule } from './template-form/template-form.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CalendarModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    TemplateFormModule,
    CalendarModule,
    PasswordModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
