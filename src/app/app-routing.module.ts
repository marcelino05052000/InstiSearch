import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'templateForm', component: TemplateFormComponent},
  { path: 'login', component: LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
