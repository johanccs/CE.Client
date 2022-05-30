import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProdService } from 'src/app/services/prod.service';

@Component({
  selector: 'app-top-five-prods',
  templateUrl: './top-five-prods.component.html',
  styleUrls: ['./top-five-prods.component.css']
})
export class TopFiveProdsComponent implements OnInit {

  products: Product[] = [];
  header: string = 'Top Five Products';

  constructor(private prodService: ProdService) { }

  ngOnInit(): void {
    this.loadLiveProds();
  }

  loadLiveProds(){
    this.header = "Top Five Products - Fetching. Please wait..."
    this.prodService.getTopFiveProducts().subscribe(data=> {
       this.products = data as Product[];
       this.header = "Top Five Products";
    }, err => {
      this.header = "Top Five Products";
    });
  }

}
