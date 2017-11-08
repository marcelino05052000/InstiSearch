import { Usuario } from 'app/Models/usuario';
import { Router } from '@angular/router'
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.username === 'usuario@email.com' &&
      usuario.password === '123456') {
        this.usuarioAutenticado = true;

        this.router.navigate(['/'])
    } else {
      this.usuarioAutenticado = false;
    }
  }

  fazerCadastro(usuario: Usuario) {
    if (usuario.nome === 'nome' && usuario.username === 'usuario@email.com' &&
      usuario.password === '123456') {
        this.usuarioAutenticado = true;

        this.router.navigate(['/'])
    } else {
      this.usuarioAutenticado = false;
    }
  }
}
