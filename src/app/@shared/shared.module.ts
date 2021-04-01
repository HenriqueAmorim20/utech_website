import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  imports: [MaterialModule, CommonModule],
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent],
  entryComponents: [],
})
export class SharedModule {}
