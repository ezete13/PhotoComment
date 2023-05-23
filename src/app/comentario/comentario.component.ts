import { Component } from '@angular/core';

interface Comentario {
  texto: string;
  editando?: boolean; 
  textoEditado?: string;
  imagenUrl: string; 
}

@Component({ 
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {
  comentarios: Comentario[] = []; 
  nuevoComentario: string = '';

  agregarComentario() {
    if (this.nuevoComentario) {
      const comentario: Comentario = {
        texto: this.nuevoComentario,
        imagenUrl: "assets/img/perfil.png"
      };
      this.comentarios.push(comentario);
      this.nuevoComentario = '';
    }
  }

  eliminarComentario(comentario: Comentario) {
    const index = this.comentarios.indexOf(comentario);
    if (index !== -1) {
      this.comentarios.splice(index, 1);
    }
  }

  editarComentario(comentario: Comentario) {
    comentario.editando = true;
    comentario.textoEditado = comentario.texto;
  }
  
  guardarEdicion(comentario: Comentario, index: number) {
    comentario.texto = String(comentario.textoEditado);
    comentario.editando = false;
  }
  
  cancelarEdicion(comentario: Comentario) {
    comentario.editando = false;
  }


}

