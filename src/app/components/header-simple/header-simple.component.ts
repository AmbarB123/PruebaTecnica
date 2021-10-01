import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-simple',
  templateUrl: './header-simple.component.html',
  styleUrls: ['./header-simple.component.css']
})
export class HeaderSimpleComponent implements OnInit {

  @Input() titlePage!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
