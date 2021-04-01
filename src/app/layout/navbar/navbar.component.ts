import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(value: any){
    this.router.navigate([value])
  }

  getCurrentPage(value: any){
    return localStorage.getItem("currentPage") === value
  }
}
