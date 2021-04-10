import { Component, OnInit, HostListener } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'utech-front';
  innerWidth: any;
  constructor(private meta: Meta){}

  ngOnInit(){
    this.meta.addTag({name: "viewport", content:"width=device-width, initial-scale=1.0"})
    this.innerWidth = window.innerWidth
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
  this.innerWidth = event.target.innerWidth;
  }

}
