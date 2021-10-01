import { Component, Input, OnInit } from '@angular/core';
import { Details } from '../../models/Details';

@Component({
  selector: 'app-box-text',
  templateUrl: './box-text.component.html',
  styleUrls: ['./box-text.component.css']
})
export class BoxTextComponent implements OnInit {

  @Input() detail!: Details;

  constructor() { }

  ngOnInit(): void {
  }

}
