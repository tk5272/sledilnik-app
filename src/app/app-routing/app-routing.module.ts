import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeznamSobComponent } from '../komponente/seznam-sob/seznam-sob.component';
import { PodrobnostiSobeComponent } from '../komponente/podrobnosti-sobe/podrobnosti-sobe.component';
import { UpravljanjeSobComponent } from '../komponente/upravljanje-sob/upravljanje-sob.component';


const routes: Routes = [
  {
    path: '',
    component: SeznamSobComponent
  },
  {
    path: 'sobe/:idSobe',
    component: PodrobnostiSobeComponent
  },
  {
    path: 'upravljanje',
    component: UpravljanjeSobComponent
  }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
