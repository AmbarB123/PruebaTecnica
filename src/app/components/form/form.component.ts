import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user: any;
  @Input() size!: string;
  @Input() sizeP!: string;

  constructor() {
    this.user = {
      nombre: '',
      email: '', 
      ciudad: '',
      telefono: '',
      accion: ''
    };
  }

  ngOnInit(): void {
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
