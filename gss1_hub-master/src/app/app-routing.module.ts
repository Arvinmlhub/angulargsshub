import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { YourJourneyComponent } from './modules/dashboard/your-journey/your-journey.component';
import { QualityComponent } from './modules/quality/quality.component';
import { P4PComponent } from './components/p4-p/p4-p.component';
import { PfpPaidDetailComponent } from './components/pfp-paid-detail/pfp-paid-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'your-journey',
    component: YourJourneyComponent,
  },
  {
    path: 'quality',
    component: QualityComponent,
  },
  {
    path: 'hr/p4p',
    component: P4PComponent
  },
  {
    path: 'hr/p4p/paid-details',
    component: PfpPaidDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
