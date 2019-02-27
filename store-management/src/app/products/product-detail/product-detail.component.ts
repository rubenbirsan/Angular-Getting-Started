import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'br-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail'
  product: Product;
  errorMessage = '';

  constructor(private route: ActivatedRoute,
    private productService: ProductService
    ) { }

    ngOnInit() {
      const param = this.route.snapshot.paramMap.get('id');
      if (param) {
        const id = +param;
        this.getProduct(id);
      }
    }
  
    getProduct(id: number) {
      this.productService.getProductById(id).subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error);
    }
}
