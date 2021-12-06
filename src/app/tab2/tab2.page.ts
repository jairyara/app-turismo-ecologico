import {Component, OnInit} from '@angular/core';
import {Place} from '../onjects/place';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  places: Place[] = [];

  constructor() {
  }

  ngOnInit(): void {
    const storage = JSON.parse(localStorage.places);
    storage.forEach(e => {
      this.places.push(new Place(e));
    });
  }

}
