import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

import { ProfileService } from './services/profile.service';
import { GoalkeepersComponent } from './goalkeepers/goalkeepers.component';
import { DefendersComponent } from './defenders/defenders.component';
import { MidfieldersComponent } from './midfielders/midfielders.component';
import { StrikersComponent } from './strikers/strikers.component';
import { ManagersComponent } from './managers/managers.component';
import { PopulatedataComponent } from './populatedata/populatedata.component';

const appRoutes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'details', component: DetailsComponent },
   { path: 'goalkeepers', component: GoalkeepersComponent },
   { path: 'defenders', component: DefendersComponent },
   { path: 'midfielders', component: MidfieldersComponent },
   { path: 'strikers', component:  StrikersComponent},
   { path: 'managers', component: ManagersComponent },
   { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ContactsComponent,
    GoalkeepersComponent,
    DefendersComponent,
    MidfieldersComponent,
    StrikersComponent,
    ManagersComponent,
    PopulatedataComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
