import { Component, OnInit } from '@angular/core';

import { Socket, io } from 'socket.io-client';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  socket: Socket;
  nombre: string = 'Marco';

  message: string = '';

  messages: Message[] = [
    // {
    //   message: 'ejemplo de alguien más',
    //   username: 'Juan Pérez'
    // },
    // {
    //   message: 'ejemplo de mensaje propio',
    //   username: 'Yome Rengues',
    //   owned: true
    // }
  ];

  constructor() {
    this.socket = io(environment.apiUrl);
  }

  ngOnInit(): void {
    this.socket.on('userConnected', () => {
      console.log('Un usuario se unió al chat!!!');
    });

    this.socket.on('messageReceived', (message: Message) => {
      this.messages.push(message);
    });

    // const nombre = prompt('Escribe tu nombre: ');
    // this.nombre = nombre!.toString();
  }

  enviarMensaje() {
    this.messages.push({
      message: this.message,
      username: this.nombre,
      owned: true
    });

    this.socket.emit('messageSent', {
      message: this.message,
      username: this.nombre
    });
  }

}

interface Message {
  message: string;
  username: string;
  owned?: boolean;
}
