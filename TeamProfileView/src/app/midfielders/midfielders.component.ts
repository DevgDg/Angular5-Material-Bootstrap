import {Component, OnInit} from '@angular/core';

import {Profile} from '../shared/profile';
import {PROFILES} from '../shared/profiles';

import {ProfileService} from '../services/profile.service';

@Component({selector: 'app-midfielders', templateUrl: './midfielders.component.html', styleUrls: ['./midfielders.component.scss']})
export class MidfieldersComponent implements OnInit {

  profiles : Profile[];
  currentPosition : string = 'Midfielder';
  constructor(private profileService : ProfileService) {}

  ngOnInit() {
    this.profiles = this
      .profileService
      .getProfileByPosition(this.currentPosition);
  }

}
