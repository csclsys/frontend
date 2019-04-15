import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  chatsCards = [
    {title: 'Tema 1', img: '../../../assets/img/forum/1.jpg'},
    {title: 'Tema 2', img: '../../../assets/img/forum/2.jpg'},
    {title: 'Tema 3', img: '../../../assets/img/forum/3.jpg'},
    {title: 'Tema 4', img: '../../../assets/img/forum/4.jpg'},
    {title: 'Tema 5', img: '../../../assets/img/forum/5.jpg'},
    {title: 'Tema 6', img: '../../../assets/img/forum/6.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
