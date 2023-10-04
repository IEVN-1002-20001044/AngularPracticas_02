import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConversionComponent } from './formularios/conversion/conversion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiplicacionComponent } from './formularios/multiplicacion/multiplicacion.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    MultiplicacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule //importación del material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
