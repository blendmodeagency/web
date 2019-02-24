import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgencyComponent } from './agency/agency.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'agency', component: AgencyComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'works',    component: WorksComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
