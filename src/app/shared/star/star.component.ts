import { Component, Output, EventEmitter, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 90;
  @Output() ratingClicked: EventEmitter<string> = 
  new EventEmitter<string>()
  constructor() { }

  

  ngOnChanges():void{
    this.cropWidth = this.rating * 84/5;
  }

  onClick() : void{
    this.ratingClicked.emit(`The rating ${this.rating} was Clicked`);
  }

}
