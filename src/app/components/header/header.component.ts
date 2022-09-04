import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public backgrounds: string[] = [
    "../../../assets/backgrounds/city.jpg",
    "../../../assets/backgrounds/ubuntu.jpg",
    "https://i.picsum.photos/id/902/1200/500.jpg?hmac=ea2N3j3pPTJbs7sZq_2L3zxpnnQAtM6qFTkNp0olUSo",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ]

  constructor() { }

  ngOnInit(): void {
    const num = Math.floor(Math.random()*this.backgrounds.length);

    let el = document.getElementById("background");
    el ? el.style.backgroundImage = `url(${this.backgrounds[num]})`: "";

    let me = document.getElementById("photo");
    me ? me.style.backgroundImage = "url(https://github.com/diogozdev.png)": "";
  }

}
