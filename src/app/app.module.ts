import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AgePipe } from './pipes/age.pipe'
import { PeopleService } from './services/people.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ListPeoplesComponent } from './pages/people/list-peoples/list-peoples.component';

const appRoutes: Routes = [
  { path: '', component: ListPeoplesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    NotFoundComponent,
    ListPeoplesComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
