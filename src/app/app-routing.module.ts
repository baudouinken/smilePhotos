import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  {path: '', component: GalleryComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
