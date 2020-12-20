import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OgrodjeComponent } from './komponente/ogrodje/ogrodje.component';
import { NavbarComponent } from './komponente/navbar/navbar.component';
import { SeznamSobComponent } from './komponente/seznam-sob/seznam-sob.component';
import { PodrobnostiSobeComponent } from './komponente/podrobnosti-sobe/podrobnosti-sobe.component';
import { UpravljanjeSobComponent } from './komponente/upravljanje-sob/upravljanje-sob.component';
import { SlikeSobComponent } from './komponente/slike-sob/slike-sob.component'
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    OgrodjeComponent,
    NavbarComponent,
    SeznamSobComponent,
    PodrobnostiSobeComponent,
    UpravljanjeSobComponent,
    SlikeSobComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [OgrodjeComponent]
})
export class AppModule { }
