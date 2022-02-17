import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
  menu = ['Home', 'Conta', 'Carrinho'];
  searchForm: FormGroup = new FormGroup({
    search: new FormControl(''),
  });
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
    this.hide = false
    this.router.navigate([value])
  }

  navToCategory(value: any){
    this.router.navigate(['produtos'],{ queryParams: {category: value}})
  }

  getCurrentPage(value: any){
    return localStorage.getItem("currentPage") === value
  }

  showDropDown(){
    this.hide = !this.hide
  }

  showCategories(value:any){
    this.hide = value
  }
}
