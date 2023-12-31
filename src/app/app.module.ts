import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConversionComponent } from './formularios/conversion/conversion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiplicacionComponent } from './formularios/multiplicacion/multiplicacion.component';

import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MaterialModule } from './material/material/material.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DatosComponent } from './evaluación/datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    MultiplicacionComponent,
    CinepolisComponent,
    MenuComponent,
    HomeComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
