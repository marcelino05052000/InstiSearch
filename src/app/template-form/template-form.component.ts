import { AuthService } from './../login/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'app/Models/usuario';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  /*onSubmit(form) {
    console.log(form);
    // console.log(this.usuario);
  }*/

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  fazerCadastro(usuario: Usuario) {
    // console.log(this.usuario)
    this.authService.fazerCadastro(this.usuario);
  }

}
