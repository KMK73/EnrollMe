import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavBarOpen: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isNavBarOpen = false;
  }

  toggleNavBar() {
    const navbar = document.getElementById('nav');
    console.log(navbar);
    navbar.classList.toggle('open');
  }

}
