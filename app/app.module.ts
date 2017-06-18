import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ChildComponent } from './child.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ChildComponent ],//Declare the parent and child components
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
