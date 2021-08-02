import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    InputWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
