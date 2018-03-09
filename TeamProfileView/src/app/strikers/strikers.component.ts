import {Component, OnInit} from '@angular/core';

import {Profile} from '../shared/profile';
import {PROFILES} from '../shared/profiles';

import {ProfileService} from '../services/profile.service';

@Component({selector: 'app-strikers', templateUrl: './strikers.component.html', styleUrls: ['./strikers.component.scss']})
export class StrikersComponent implements OnInit {

  profiles : Profile[];
  currentPosition : string = 'Forward';
  constructor(private profileService : ProfileService) {}

  ngOnInit() {
    this.profiles = this
      .profileService
      .getProfileByPosition(this.currentPosition);
  }

}
