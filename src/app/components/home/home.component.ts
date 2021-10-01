import { Component, OnInit } from '@angular/core';
import { Details } from '../../models/Details';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public details: Details[];
  public user: any;

  constructor() { 
    this.details = [
      new Details('<i class="fas fa-heart"></i>', 'Curso gratis para quien quiere trabajar con Internet'),
      new Details('<i class="fas fa-passport"></i>', 'Dosis diarias de conocimiento'),
      new Details('<i class="fas fa-users-cog"></i>', 'Clases presenciales con nuestros especialistas'),
      new Details('<i class="far fa-money-bill-alt"></i>', 'Clases online para promover distintos productos. ')
    ];

    this.user = {
      nombre: '',
      email: '', 
      ciudad: '',
      telefono: '',
      accion: ''
    };
  }

  ngOnInit(): void {
    console.log(this.details);
    AOS.init();
  }

  onSubmit() {
    console.log(this.user);
    alert('Se ha registrado exitosamente!')
    this.user = {
      nombre: '',
      email: '', 
      ciudad: '',
      telefono: '',
      accion: ''
    };
  }


}
