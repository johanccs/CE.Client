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

  constructor(private prodService: ProdService) { }

  ngOnInit(): void {
    this.loadLiveProds();
  }

  loadLiveProds(){
    this.prodService.getTopFiveProducts().subscribe(data=> {
       this.products = data as Product[];
       console.log(this.products);
    });
  }

}
