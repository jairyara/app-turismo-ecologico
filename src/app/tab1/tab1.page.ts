import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../api/service.service';
import {Place} from '../onjects/place';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  places: Place[] = [];

  constructor(private activatedRoute: ActivatedRoute, private api: ServiceService) {
  }

  ngOnInit(): void {
    this.api.listPlaces().subscribe(r => {
      r.places.forEach(e => {
        this.places.push(new Place(e));
      });
    });
  }

}
