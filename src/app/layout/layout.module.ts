import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [MaterialModule, CommonModule],
  declarations: [FooterComponent, NavbarComponent],
  exports: [FooterComponent, NavbarComponent],
})
export class LayoutModule {}
