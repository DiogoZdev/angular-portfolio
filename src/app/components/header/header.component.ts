import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public backgrounds: string[] = [
    "../../../assets/backgrounds/city.jpg",
    "../../../assets/backgrounds/ubuntu.jpg"
  ]

  constructor() { }

  ngOnInit(): void {
    const num = Math.floor(Math.random()*2);

    let el = document.getElementById("background");

    el ? el.style.backgroundImage = `url(${this.backgrounds[num]})`: '';
  }

}
