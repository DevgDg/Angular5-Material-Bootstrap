import { Injectable } from '@angular/core';
import { Profile } from '../shared/profile';
import { PROFILES } from '../shared/profiles';

@Injectable()
export class ProfileService {

  constructor() { }

  getProfiles(): Profile[] {
    return PROFILES;
  }
  getProfileByID(id: number): Profile {
    return PROFILES.filter((profile) => 
    (profile.id === id))[0];
  }
  getProfileByPosition(currentPosition: string): Profile[] {
    return PROFILES.filter((profile) => profile.currentPosition == currentPosition);
  }
  getTeamPic() {
    //the service to be created for Team info
    return "../../assets/images/0Team.jpg";
  }
}
