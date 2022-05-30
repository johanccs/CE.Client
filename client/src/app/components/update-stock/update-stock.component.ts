import { ɵHttpInterceptingHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ProductToBeUpdated } from 'src/app/models/ProductToBeUpdated';
import { ProductToBeUpdatedWithId } from 'src/app/models/productToBeUpdatedWithId';
import { TopFiveProducts } from 'src/app/models/topFiveProducts';
import { ProdService } from 'src/app/services/prod.service';
import { Validator } from '../helpers/validator';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

  products: TopFiveProducts[] = [];
  prodToBeUpdated: ProductToBeUpdated[] = [];
  id: number = 0;
  description: string = "";
  qty: number = 0;
  gtin: string = "";
  header: string = "Update Product Qty";

  constructor(private prodService: ProdService) { }

  ngOnInit(): void {
    this.loadLiveProds();
  }

  loadLiveProds(){
    this.header = "Update Product Qty - Please wait..."; 
    this.prodService.getProductToBeUpdated().subscribe(data=> {
       this.products = data as TopFiveProducts[];
       this.header = "Update Product Qty";
    }, err => {
      alert(err.Message);
      this.header = "Update Product Qty";
    });
  }

  displayChildren(prod: TopFiveProducts){
    this.prodToBeUpdated = prod.lines;
    this.id = prod.id;
  }

  displayChildDetail(line: ProductToBeUpdated){
    this.description = line.description;
    this.qty = line.qty;
    this.gtin = line.gtin;
  }

  update(){
    const prod = new ProductToBeUpdatedWithId(this.id, this.gtin, this.description, this.qty);
  
    if(!Validator.Validate(prod)){
      alert("Invalid details");
      return;
    }

    this.prodService.updateProduct(prod).subscribe(data => {
      console.log(data);
    });
  }
}
