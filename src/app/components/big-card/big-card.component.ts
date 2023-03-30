import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = 'https://s3.gaming-cdn.com/images/products/12935/616x353/iron-man-pc-jogo-cover.jpg?v=1663689493';
  @Input()
  cardTitle:string = 'tets';
  @Input()
  cardDescription:string = 'tearsae';

  constructor() { }

  ngOnInit(): void {
  }

}
