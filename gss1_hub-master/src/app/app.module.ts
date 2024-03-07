import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { QualityComponent } from './modules/quality/quality.component';
import { P4PComponent } from './components/p4-p/p4-p.component';
import { Routes } from '@angular/router';
import { PfpPaidDetailComponent } from './components/pfp-paid-detail/pfp-paid-detail.component';
import { EmpRatingComponent } from './emp-rating/emp-rating.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent, SidebarComponent,  EmpRatingComponent,QualityComponent,P4PComponent, EmpRatingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    DashboardModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule {}
