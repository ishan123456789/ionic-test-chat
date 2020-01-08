import { Component, OnInit } from '@angular/core';

interface IMessage {
  sender: string;
  message: string;
  dateTime: Date;
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages: IMessage[] = [];
  senderName = 'Souvik Sarkar';
  chatMessage = '';
  constructor() { }

  ngOnInit() {
    const storedInfo = localStorage.getItem('messages');
    this.messages = storedInfo ? JSON.parse(storedInfo) : [];
  }
  sendMessage() {
    this.messages.push({ sender: this.senderName, message: this.chatMessage, dateTime: new Date() });
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }


}
