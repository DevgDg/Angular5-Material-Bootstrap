import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../shared/profile';
import { PROFILES } from '../shared/profiles';
import { ProfileService } from '../services/profile.service';
@Component({
  selector: 'app-populatedata',
  templateUrl: './populatedata.component.html',
  styleUrls: ['./populatedata.component.scss']
})
export class PopulatedataComponent implements OnInit {

  @Input()
  profiles: Profile[];
  selectedProfile: Profile;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    if(this.selectedProfile==null)
    {
      this.selectedProfile = this.profiles[0];
    }
  }
  onSelect(id: number) {
    this.selectedProfile = this.profileService.getProfileByID(id);
  }

}
