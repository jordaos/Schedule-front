import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { AgePipe } from './pipes/age.pipe'
import { PeopleService } from './services/people.service';
import { PhoneService } from './services/phone.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ListPeoplesComponent } from './pages/people/list-peoples/list-peoples.component';
import { AddPeopleComponent } from './pages/people/add-people/add-people.component';

const appRoutes: Routes = [
  { path: '', component: ListPeoplesComponent },
  { path: 'people/add', component: AddPeopleComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    NotFoundComponent,
    ListPeoplesComponent,
    AddPeopleComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    TextMaskModule
  ],
  providers: [
    PeopleService,
    PhoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
