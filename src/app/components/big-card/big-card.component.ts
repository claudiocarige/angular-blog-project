import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.css',
    './big-card.response.component.css'

]
})
export class BigCardComponent {
  @Input()
  bigCardPhoto: String = ""
  @Input()
  bigCardDescription: String = ""
  @Input()
  bigCardTitle: String = ""
  @Input()
  Id: String = "0"
}
