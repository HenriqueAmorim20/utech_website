import { Component, OnInit, HostListener } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations:[
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [ style({ opacity: 0 }), animate(750) ])
    ])
  ]
})
export class ProductsComponent implements OnInit {

  sort: any = 'default';
  selected: any;
  innerWidth: any;
  categories: any;
  allProducts: any;
  products: any;

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('currentPage', 'produtos')
    this.innerWidth = window.innerWidth
    try {
      //Fazer o get das categorias e dos produtos
      this.categories = ['PCs', 'SmartWatch', 'SmartPhone', 'Periféricos', 'Ipads', 'SSDs e HDs']
      this.allProducts = [
        {
          title: 'iPad Pro (2020) 11" 2ª Geração Cinza-Espacial 128GB Wi-Fi',
          price: 6999.00,
          imgSrc: "ipadpro.png",
          id: "1",
          category: "PCs"
        },
        {
          title: 'Macbook Air 13" (2020) Cinza-Espacial / Processador M1 / 8GB / 256GB SSD',
          price: 9099.00,
          imgSrc: "macbookair.png",
          id: "2",
          category: "PCs"
        },
        {
          title: 'MacBook Pro 13” (2020) Space Gray Touch Bar/ID - Processador M1 / 8GB / 256GB SSD',
          price: 11099.00,
          imgSrc: "macbookpro.png",
          id: "3",
          category: "PCs"
        },
        {
          title: "iPad 8˚Geração Cinza espacial 128GB Wifi",
          price: 3599.00,
          imgSrc: "ipad.png",
          id: "4",
          category: "PCs"
        },
        {
          title: 'iPad Pro (2020) 11" 2ª Geração Cinza-Espacial 128GB Wi-Fi',
          price: 6999.00,
          imgSrc: "ipadpro.png",
          id: "1",
          category: "PCs"
        },
        {
          title: 'Macbook Air 13" (2020) Cinza-Espacial / Processador M1 / 8GB / 256GB SSD',
          price: 9099.00,
          imgSrc: "macbookair.png",
          id: "2",
          category: "PCs"
        },
        {
          title: 'MacBook Pro 13” (2020) Space Gray Touch Bar/ID - Processador M1 / 8GB / 256GB SSD',
          price: 11099.00,
          imgSrc: "macbookpro.png",
          id: "3",
          category: "PCs"
        },
        {
          title: "iPad 8˚Geração Cinza espacial 128GB Wifi",
          price: 3599.00,
          imgSrc: "ipad.png",
          id: "4",
          category: "PCs"
        }
      ]
    } catch (error) {
      console.log(error)
    }
    this.setCategory(this.categories[0])
  }

  @HostListener('window: resize', ['$event'])
  onResize(event:any){
    this.innerWidth = event.target.innerWidth
  }

  setCategory(value?:any){
    if(value){
      if(this.selected===value) return;
      this.selected = value;
      this.products = this.allProducts.filter( (p: any) => p.category === value)
    }

    switch (this.sort) {
      case 'a-z':
        this.products = this.products.sort((a: any, b: any) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
        break;
      case 'z-a':
        this.products = this.products.sort((a: any, b: any) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())).reverse()
        break;
      case 'priceLower':
        this.products = this.products.sort((a: any, b: any) => {return a.price - b.price});
        break;
      case 'priceHigher':
        this.products = this.products.sort((a: any, b: any) => {return b.price - a.price});
        break;

      default:

    }

  }

  getSelected(value: any){
    return this.selected === value;
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.setCategory(this.categories[tabChangeEvent.index])
  }
}
