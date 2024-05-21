import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiglioComponent } from './figlio/figlio.component';
import { Figlio2Component } from './figlio2/figlio2.component';
import { FormComponent } from './form/form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TestPipe } from './test.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RootingModule } from './rooting/rooting.module';

@NgModule({
  declarations: [
    AppComponent,
    FiglioComponent,
    Figlio2Component,
    FormComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RootingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
