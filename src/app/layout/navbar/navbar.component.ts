import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  cartCount: number = 0;
  changeScreen: boolean = false;
  innerWidth: any;
  hide: any = false;

  constructor(private router: Router) { }


  ngOnInit() {
      this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
  this.innerWidth = event.target.innerWidth;
  if(this.innerWidth < 851)
    this.hide = false
  }

  navigate(value: any){
    this.router.navigate([value])
  }

  getCurrentPage(value: any){
    return localStorage.getItem("currentPage") === value
  }

  toggleNavbar(){
    this.hide = !this.hide
  }
}
