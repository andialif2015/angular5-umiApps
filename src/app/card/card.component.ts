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

  @Output() counterLike: EventEmitter<{ index:number;  countLikes?: number;}> = new EventEmitter();
  onLike(){
    this.dataPerson.countLikes = this.dataPerson.countLikes + 1;
    this.counterLike.emit({
      index: this.dataPerson.index,
      countLikes: this.dataPerson.countLikes});
  }
}
