import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DirectivangModelComponent } from './directivas/components/directivang-model/directivang-model.component';
import { DadoComponent } from './directivas/components/dado/dado.component';
import { Dado2Component } from './directivas/components/dado2/dado2.component';
import { CronometroComponent } from './directivas/components/cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivangModelComponent,
    DadoComponent,
    Dado2Component,
    CronometroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
