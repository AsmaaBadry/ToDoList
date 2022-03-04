import { Component, OnInit ,Input} from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() Product:Product={
  id: 0,
  title: '',
  price: 0,
  description: '' ,
  category: '',
  image: '' ,
  rating: {
    rate: 0,
    count: 0
  }

};
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  navigateToProductDetails() {
    this.router.navigate(['/product-details' , this.Product.id])
    console.log("hello")
  }
}
