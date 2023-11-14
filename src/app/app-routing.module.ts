import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConversionComponent } from './formularios/conversion/conversion.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
import { MultiplicacionComponent } from './formularios/multiplicacion/multiplicacion.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'Conversion', component: ConversionComponent },
  { path: 'Multi', component: MultiplicacionComponent },
  { path: 'cinepolis', component: CinepolisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
