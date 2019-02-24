import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgencyComponent } from './agency/agency.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CursorComponent } from './shared/components/cursor/cursor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgencyComponent,
    ContactComponent,
    WorksComponent,
    MenuComponent,
    CursorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
