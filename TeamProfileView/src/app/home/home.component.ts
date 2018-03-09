import { Component, OnInit } from '@angular/core';

import { Profile } from '../shared/profile';
import { PROFILES } from '../shared/profiles';

import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

profiles: Profile[];
selectedProfile: Profile;
teamPic: string;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profiles = this.profileService.getProfiles();
    this.teamPic = this.profileService.getTeamPic();
  }
  onSelect(id: number) {
    this.selectedProfile = this.profileService.getProfileByID(id);
  }

}
