import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: any = ["img1","img2", "img3", "cover"];
  i: number = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() =>{
      this.cImage('next')
    },12000)
  }

  cImage(value?: string){
    if(value==='next'){
      if(this.i<this.images.length - 1) this.i+=1
      else this.i = 0
      return
    }
    if(this.i>0) this.i-=1
    else this.i=this.images.length - 1
  }

}
