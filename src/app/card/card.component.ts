import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../onjects/place';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() place: Place = null;

  constructor() {
  }

  ngOnInit() {
  }

}
