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

@NgModule({
  declarations: [AppComponent, NavbarComponent, SidebarComponent, QualityComponent,P4PComponent],
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
