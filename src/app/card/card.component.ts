import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() dataPerson: {
    index: string;
    picture: string;
    age: number;
    name: string;
    company: string;
    phone: string;
    address: string;
    countLikes?: number;
  };

  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  onLike(){
    this.parentFunction.emit(this.dataPerson);
  }

  constructor() {

   }

  ngOnInit(): void {

  }
}
