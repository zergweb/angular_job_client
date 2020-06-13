import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPageComponent } from './components/job-page/job-page.component';
import { JobPageRoutingModule } from './job-page.routing';
import { DefaultJobTabComponent } from './components/default-job-tab/default-job-tab.component';
import { HistoryJobTabComponent } from './components/history-job-tab/history-job-tab.component';
import { BuildJobTabComponent } from './components/build-job-tab/build-job-tab.component';
import { CalendarJobTabComponent } from './components/calendar-job-tab/calendar-job-tab.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [JobPageComponent, DefaultJobTabComponent, HistoryJobTabComponent, BuildJobTabComponent, CalendarJobTabComponent],
  imports: [
    CommonModule,
    JobPageRoutingModule,
    SharedModule
  ]
})
export class JobPageModule { }
