import { Usuario } from './Models/usuario';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  usuarios: Usuario[] = [];
  usuario: Usuario = new Usuario();

  addUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }
  getUsuarios() {
    return this.usuarios;
  }

  usuarioExiste(usuario: Usuario) {
    let existe: boolean = false;
    for (let i: number=0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].username == usuario.username && this.usuarios[i].password == usuario.password) {
         existe = true;
      }else {
        alert('Usuário não está cadastrado! Tente de novo.')
       }
      }
      return existe;
  }

  constructor() { }

}
