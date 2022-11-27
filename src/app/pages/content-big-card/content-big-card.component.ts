import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFakeBigCard'
@Component({
  selector: 'app-content-big-card',
  templateUrl: './content-big-card.component.html',
  styleUrls: ['./content-big-card.component.css']
})
export class ContentBigCardComponent implements OnInit{
  @Input()
  contentTitle: String =""
  @Input()
  contentCover: String =""
  @Input()
  contentDescripition: String =""
  private id: string | null = "0"
  @Input()
  contentId:string = ""

  constructor(
    private route: ActivatedRoute
  ){}
 
  ngOnInit(): void{
    this.route.paramMap.subscribe(value =>
     this.id = value.get("id")
   )
      this.setValuesComponent(this.id)
  }
   setValuesComponent(id: string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.contentId = result.id
    this.contentTitle = result.title
    this.contentDescripition = result.description
    this.contentCover = result.photo
   }
}
