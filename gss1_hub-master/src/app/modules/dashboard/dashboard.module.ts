import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { YourJourneyComponent } from './your-journey/your-journey.component';
import { ProfileCardComponent } from 'src/app/components/profile-card/profile-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { P4PComponent } from 'src/app/components/p4-p/p4-p.component';
import { viewDetailsGrid } from 'src/app/utils/viewTableGrid';
import { PfpPaidDetailComponent } from 'src/app/components/pfp-paid-detail/pfp-paid-detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    YourJourneyComponent,
    ProfileCardComponent,
    PfpPaidDetailComponent
  
  ],
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule, RouterModule ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
