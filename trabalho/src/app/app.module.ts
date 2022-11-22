import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercicio01Component } from './exercicios/exercicio01/exercicio01.component';
import { Exercicio02Component } from './exercicios/exercicio02/exercicio02.component';
import { Exercicio03Component } from './exercicios/exercicio03/exercicio03.component';

const routes: Route[] = [
  {
    path: 'exercicio1',
    component: Exercicio01Component
  },
  {
    path: 'exercicio2',
    component: Exercicio02Component
  },
  {
    path: 'exercicio3',
    component: Exercicio03Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    Exercicio01Component,
    Exercicio02Component,
    Exercicio03Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
