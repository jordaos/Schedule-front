import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AgePipe } from './pipes/age.pipe'
import { PeopleService } from './services/people.service';
import { PhoneService } from './services/phone.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ListPeoplesComponent } from './pages/people/list-peoples/list-peoples.component';
import { AddPeopleComponent } from './pages/people/add-people/add-people.component';
import { ShowPeopleDialogComponent } from './pages/dialog/show-people-dialog/show-people-dialog.component';
import { DeletePeopleDialogComponent } from './pages/dialog/delete-people-dialog/delete-people-dialog.component';
import { EditPeopleComponent } from './pages/people/edit-people/edit-people.component';

const appRoutes: Routes = [
  { path: '', component: ListPeoplesComponent },
  { path: 'people/add', component: AddPeopleComponent },
  { path: 'people/dialog', component: ShowPeopleDialogComponent },
  { path: 'people/edit/:id', component: EditPeopleComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    NotFoundComponent,
    ListPeoplesComponent,
    AddPeopleComponent,
    ShowPeopleDialogComponent,
    DeletePeopleDialogComponent,
    EditPeopleComponent,
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TextMaskModule
  ],
  providers: [
    PeopleService,
    PhoneService
  ],
  entryComponents: [
    ShowPeopleDialogComponent,
    DeletePeopleDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
