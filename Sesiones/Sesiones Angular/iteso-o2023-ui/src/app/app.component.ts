import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Example app';
  name: string = 'Usuario';

  tareas: string[] = [];
  titulo_tarea: string = '';

  constructor() {
    setTimeout(() => {
      this.name = 'Usuari@'
    }, 3000);
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

}
