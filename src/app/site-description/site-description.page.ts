import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../api/service.service';
import {ActivatedRoute} from '@angular/router';
import {Place} from '../onjects/place';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-site-description',
  templateUrl: './site-description.page.html',
  styleUrls: ['./site-description.page.scss'],
})
export class SiteDescriptionPage implements OnInit {

  place: Place = null;
  maps: SafeResourceUrl;

  constructor(private api: ServiceService, private activatedRoute: ActivatedRoute, public domSanitiser: DomSanitizer) {
  }

  ngOnInit() {
    const id: string = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getPlace(id).subscribe(r => {
      this.place = new Place(r.places);
      const URL = 'https://maps.google.com/maps?q=' + this.place.long + ',' + this.place.lat + '&output=embed';
      this.maps = this.domSanitiser.bypassSecurityTrustResourceUrl(URL);
    });
  }

}
