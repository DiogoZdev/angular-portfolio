import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public notification = false;
  public dark = false;

  constructor() { }

  ngOnInit(): void {
    const darkTheme = localStorage.getItem("dark");
    if (darkTheme) this.toggleTheme();
  }

  toggleTheme() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark", "true");
      this.dark = true;
    } else {
      localStorage.removeItem("dark");
      this.dark = false;
    }
  }

  toggleNotification() {
    this.notification = !this.notification;
  }
}
