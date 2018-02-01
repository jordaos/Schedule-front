import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AgePipe } from './pipes/age.pipe'
import { PeopleService } from './services/people.service';


@NgModule({
  declarations: [
    AppComponent,
    AgePipe
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
