import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  sort: any;
  innerWidth: any;
  products: any = [
    {
      title: 'iPad Pro (2020) 11" 2ª Geração Cinza-Espacial 128GB Wi-Fi',
      price: "6.999,00",
      imgSrc: "ipadpro.png",
      id: "1",
      category: "ipad"
    },
    {
      title: 'Macbook Air 13" (2020) Cinza-Espacial / Processador M1 / 8GB / 256GB SSD',
      price: "9.099,00",
      imgSrc: "macbookair.png",
      id: "2",
      category: "pc"
    },
    {
      title: 'MacBook Pro 13” (2020) Space Gray Touch Bar/ID - Processador M1 / 8GB / 256GB SSD',
      price: "11.099,00",
      imgSrc: "macbookpro.png",
      id: "3",
      category: "pc"
    },
    {
      title: "iPad 8˚Geração Cinza espacial 128GB Wifi",
      price: "3599,00",
      imgSrc: "ipad.png",
      id: "4",
      category: "ipad"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('currentPage', 'products')
    this.innerWidth = window.innerWidth
  }

  @HostListener('window: resize', ['$event'])
  onResize(event:any){
    this.innerWidth = event.target.innerWidth
  }

}
