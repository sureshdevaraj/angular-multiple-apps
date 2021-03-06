import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { App1SharedModule } from "../../projects/kss-widget/src/app/app.module";
// import { DeferLoadModule } from '@trademe/ng-defer-load';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    App1SharedModule.forRoot()
    // DeferLoadModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
