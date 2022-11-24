import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { PatientEntryComponent } from './patient-entry/patient-entry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const myRoute:Routes=
[
  {
    path:"",
    component:PatientEntryComponent
  },
  {
    path:"search",
    component:PatientSearchComponent
  },
  {
    path:"delete",
    component:PatientDeleteComponent
  },
  {
    path:"view",
    component:PatientViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PatientEntryComponent,
    PatientSearchComponent,
    PatientDeleteComponent,
    PatientViewComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot(myRoute)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
