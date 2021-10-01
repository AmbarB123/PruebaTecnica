import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-promotor',
  templateUrl: './promotor.component.html',
  styleUrls: ['./promotor.component.css']
})
export class PromotorComponent implements OnInit {

  public client: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.client = {
      user: '',
      password:''
    };
  }

  ngOnInit(): void {
  }

  registrarme(){
    this._router.navigate(['/contacto']);
  }

  onSubmit() {
    console.log(this.client);
    alert('Haz ingresado!')
    this.client = {
      user: '',
      password:''
    };
  }

}
