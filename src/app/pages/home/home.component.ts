import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFakeTwo } from 'src/app/data/dataFakeTwoSmallCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  lista: any [] = dataFakeTwo

}
