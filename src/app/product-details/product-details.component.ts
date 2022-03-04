import { Component, OnInit } from '@angular/core';
import prodctsList from '../../assets/products.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetails : any ;
  constructor(private activatedRoute : ActivatedRoute) {
    const activeID = this.activatedRoute.snapshot.params['id']
    this.productDetails = prodctsList.find(product => product.id == activeID);
    console.log(this.productDetails)
  }

  ngOnInit(): void {
  }

}
