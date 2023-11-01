import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'MRCH-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name: string = 'Usuario';

  tareas: string[] = [];
  titulo_tarea: string = 'Hola';
  acepto: boolean = false;

  constructor(tokenService: TokenService, router: Router) {
    setTimeout(() => {
      this.name = 'Usuari@'
    }, 3000);

    // if (!tokenService.isLoggedin()) {
    //   router.navigate(['login']);
    // }
  }

  onClick(event: Event): void {
    event.stopPropagation();
    console.log(event.target);
    alert('Hiciste click!');
  }

  agregarTarea(elem: HTMLInputElement): void {
    // this.tareas.push('Holis');

    console.log('Título a guardar: ', elem.value);
    this.tareas.push(elem.value);
  }

  setTitulo(event: KeyboardEvent): void {
    // console.log('Tecla presionada ', event.key);
    // console.log('Valor ', (event.target as HTMLInputElement).value);

    const valor: string = (event.target as HTMLInputElement).value;
    this.titulo_tarea = valor;
  }

  /* detectarEnter(event: KeyboardEvent, campo: HTMLInputElement) {
    if (event.key == 'Enter') {
      this.agregarTarea(campo);
    }
  } */

  agregar(): void {
    this.tareas.push(this.titulo_tarea);
    this.titulo_tarea = '';
  }
}
