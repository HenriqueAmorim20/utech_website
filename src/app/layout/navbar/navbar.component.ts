import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;
  changeScreen: boolean = false;


  constructor(private router: Router) { }

  ngOnInit(): void {
    setInterval(()=>{
      if(window.innerWidth < 880)
        this.changeScreen = true
      else this.changeScreen = false
    }, 100)
  }

  navigate(value: any){
    this.router.navigate([value])
  }

  getCurrentPage(value: any){
    return localStorage.getItem("currentPage") === value
  }
}
