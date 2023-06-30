import { Component, onInit} from '@angular/core';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements onInit{

  Items: Item[] =[];
  constructor() {}
  ngOnInit(): void {
    this.Items = [
      {
        id: 0,
        title: 'manzana'
        price: 10.5,
        quantity:4,
        completed: false
      },
      {
        id: 1,
        title: 'pan'
        price: 3.5,
        quantity:8,
        completed: true
      },
    ];
  }
//no toquen nada//
}
