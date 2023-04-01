import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/12/superman-the-flash-justice-league.jpg"
  contentTitle: string = 'Meu titulo'
  contentDescription: string = 'Descriçaão'
  private id: string | null = '0'

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"));
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = data.filter(article => article.id === id)[0];

    this.photoCover = result.photoCover; 
    this.contentTitle = result.title
    this.contentDescription = result.description
    
  }

}
