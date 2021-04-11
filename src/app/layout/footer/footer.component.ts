import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  data: any;
  innerWidth:any;

  constructor(private router: Router) {}

  ngOnInit() {
    const currentdate = new Date();
    this.data = currentdate.getFullYear();
    this.innerWidth = window.innerWidth
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
  this.innerWidth = event.target.innerWidth;
  }

  navigate(value:any){
    this.router.navigate([value])
  }

}

