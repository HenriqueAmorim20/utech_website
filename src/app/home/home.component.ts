import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: any = ["rcover","img1","img2", "img3"];
  i: number = 0;
  recommended: any = [
    {
      title: 'iPad Pro (2020) 11" 2ª Geração Cinza-Espacial 128GB Wi-Fi',
      price: "6.999,00",
      imgSrc: "ipadpro.png",
      id: "1",
    },
    {
      title: 'Macbook Air 13" (2020) Cinza-Espacial / Processador M1 / 8GB / 256GB SSD',
      price: "9.099,00",
      imgSrc: "macbookair.png",
      id: "2",
    },
    {
      title: 'MacBook Pro 13” (2020) Space Gray Touch Bar/ID - Processador M1 / 8GB / 256GB SSD',
      price: "11.099,00",
      imgSrc: "macbookpro.png",
      id: "3",
    },
    {
      title: "iPad 8˚Geração Cinza espacial 128GB Wifi",
      price: "3599,00",
      imgSrc: "ipad.png",
      id: "4",
    }
  ]

  news_1: any = [
    {
      title: 'iPad Pro (2020) 11" 2ª Geração Cinza-Espacial 128GB Wi-Fi',
      price: "6.999,00",
      imgSrc: "ipadpro.png",
      id: "1",
    },
    {
      title: 'Macbook Air 13" (2020) Cinza-Espacial / Processador M1 / 8GB / 256GB SSD',
      price: "9.099,00",
      imgSrc: "macbookair.png",
      id: "2",
    },
    {
      title: 'MacBook Pro 13” (2020) Space Gray Touch Bar/ID - Processador M1 / 8GB / 256GB SSD',
      price: "11.099,00",
      imgSrc: "macbookpro.png",
      id: "3",
    },
    {
      title: "iPad 8˚Geração Cinza espacial 128GB Wifi",
      price: "3599,00",
      imgSrc: "ipad.png",
      id: "4",
    }
  ]

  news_2: any = [
    {
      title: 'iPad Pro (2020) 11" 2ª Geração Cinza-Espacial 128GB Wi-Fi',
      price: "6.999,00",
      imgSrc: "ipadpro.png",
      id: "1",
    },
    {
      title: 'Macbook Air 13" (2020) Cinza-Espacial / Processador M1 / 8GB / 256GB SSD',
      price: "9.099,00",
      imgSrc: "macbookair.png",
      id: "2",
    },
    {
      title: 'MacBook Pro 13” (2020) Space Gray Touch Bar/ID - Processador M1 / 8GB / 256GB SSD',
      price: "11.099,00",
      imgSrc: "macbookpro.png",
      id: "3",
    },
    {
      title: "iPad 8˚Geração Cinza espacial 128GB Wifi",
      price: "3599,00",
      imgSrc: "ipad.png",
      id: "4",
    }
  ]
  constructor() { }

  ngOnInit() {
    localStorage.setItem("currentPage", "home")
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
