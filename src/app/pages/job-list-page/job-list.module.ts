import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListPageRoutingModule } from './job-list.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JobListPageComponent } from './components/job-list-page/job-list-page.component';

@NgModule({
  declarations: [JobListPageComponent],
  imports: [
    CommonModule,
    JobListPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class JobListPageModule { }
