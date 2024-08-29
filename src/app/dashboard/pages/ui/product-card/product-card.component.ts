import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  //@Input({required: true}) product!: Product;
  public product = input.required<Product>();

  //@Output()
  //public onIncremenetQuantity = new EventEmitter<number>();

  public onIncrementQuantity = output<number>();

  public incrementQuantity():void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }
}
