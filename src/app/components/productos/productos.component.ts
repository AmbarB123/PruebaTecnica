import { Component, OnInit } from '@angular/core';
import {Productos} from '../../models/Productos'
import * as AOS from 'aos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos: Productos[];

  constructor() {
    this.productos = [
      new Productos(250, 'Flyer of Music Vibe', 'https://mayo.teconcetheme.com/maindemo/wp-content/uploads/sites/2/2018/05/Flyer-of-Music-Vibe-1-1-1.jpg'),
      new Productos(35, 'Gradient Blobs Vector Elements', 'https://mayo.teconcetheme.com/maindemo/wp-content/uploads/sites/2/2018/05/Gradient-Blobs-Vector-Elements-1-1-1-300x200.jpg'),
      new Productos(580, 'Bay Breeze – FortyThr33', 'https://mayo.teconcetheme.com/maindemo/wp-content/uploads/sites/2/2018/05/Bay-Breeze-Featured-1-1-300x200.jpg'),
      new Productos(35, 'Gradient Blobs Vector Elements', 'https://mayo.teconcetheme.com/maindemo/wp-content/uploads/sites/2/2018/05/Gradient-Blobs-Vector-Elements-1-1-1-300x200.jpg'),
      new Productos(580, 'Bay Breeze – FortyThr33', 'https://mayo.teconcetheme.com/maindemo/wp-content/uploads/sites/2/2018/05/Bay-Breeze-Featured-1-1-300x200.jpg'),
      new Productos(250, 'Flyer of Music Vibe', 'https://mayo.teconcetheme.com/maindemo/wp-content/uploads/sites/2/2018/05/Flyer-of-Music-Vibe-1-1-1.jpg'),
    ];
   }

  ngOnInit(): void {
    AOS.init();
  }

}

