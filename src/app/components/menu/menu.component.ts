import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  viewPromotor(){
    this._router.navigate(['/promotor']);
  }

}
