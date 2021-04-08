import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [ style({ opacity: 0 }), animate(750) ])
    ])
  ]
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

  news: any = [
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
    },
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
  timer: any;
  innerWidth: any;

  constructor() { }

  ngOnInit() {
    localStorage.setItem("currentPage", "home")
    this.startTimer()
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
  this.innerWidth = event.target.innerWidth;
  }

  startTimer(){
    this.timer = setInterval(() =>{
      this.cImage('next')
    },5000)
  }

  cImage(value?: string){
    clearInterval(this.timer)
    this.startTimer();
    // console.log('change', this.timer)
    if(value==='next'){
      if(this.i<this.images.length - 1) this.i+=1
      else this.i = 0
      return
    }
    if(this.i>0) this.i-=1
    else this.i=this.images.length - 1
  }

}
