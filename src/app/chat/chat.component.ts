import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from './web-socket.service';
import { ChatMessageDto } from './chatMessageDto';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
use: string;
  constructor(public webSocketService: WebSocketService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.use = this.tokenStorage.getUser().username;
   
    console.log(name);
    
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(this.use, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }
}
