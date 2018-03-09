import {Component, OnInit} from '@angular/core';

import {Profile} from '../shared/profile';
import {PROFILES} from '../shared/profiles';

import {ProfileService} from '../services/profile.service';

@Component({selector: 'app-goalkeepers', templateUrl: './goalkeepers.component.html', styleUrls: ['./goalkeepers.component.scss']})
export class GoalkeepersComponent implements OnInit {

  profiles : Profile[];
  currentPosition : string = 'GoalKeeper';
  constructor(private profileService : ProfileService) {}

  ngOnInit() {
    this.profiles = this
      .profileService
      .getProfileByPosition(this.currentPosition);
  }

}
