import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataviewScreenComponent } from './dataview-screen/dataview-screen.component';
import { MillonesPipe } from './pipes/millones.pipe';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, DataviewScreenComponent, MillonesPipe, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
