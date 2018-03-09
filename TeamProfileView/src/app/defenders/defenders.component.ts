import {Component, OnInit} from '@angular/core';

import {Profile} from '../shared/profile';
import {PROFILES} from '../shared/profiles';

import {ProfileService} from '../services/profile.service';

@Component({selector: 'app-defenders', templateUrl: './defenders.component.html', styleUrls: ['./defenders.component.scss']})
export class DefendersComponent implements OnInit {

  profiles : Profile[];
  currentPosition : string = 'Defender';
  constructor(private profileService : ProfileService) {}

  ngOnInit() {
    this.profiles = this
      .profileService
      .getProfileByPosition(this.currentPosition);
  }

}
