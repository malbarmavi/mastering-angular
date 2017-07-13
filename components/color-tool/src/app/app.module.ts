import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel , FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { ColorToolComponent } from './components/color-tool/color-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorToolComponent
  ],
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
