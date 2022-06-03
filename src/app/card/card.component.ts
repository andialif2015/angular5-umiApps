import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { dataCard } from './data-card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {





  constructor() {

   }



  ngOnInit(): void {

  }

  @Input() dataPerson: dataCard;

  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  onLike(){
    this.parentFunction.emit(this.dataPerson);
  }
}
