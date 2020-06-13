import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { JobPageComponent } from './components/job-page/job-page.component';
import { DefaultJobTabComponent } from './components/default-job-tab/default-job-tab.component';
import { HistoryJobTabComponent } from './components/history-job-tab/history-job-tab.component';
import { CalendarJobTabComponent } from './components/calendar-job-tab/calendar-job-tab.component';
import { BuildJobTabComponent } from './components/build-job-tab/build-job-tab.component';

const routes: Routes = [
    {
        path: '', component: JobPageComponent,
         children: [
             { path: '', redirectTo: 'default' },
             { path: 'default', component: DefaultJobTabComponent },
             { path: 'history', component: HistoryJobTabComponent },
             { path: 'calendar', component: CalendarJobTabComponent },
             { path: 'build', component: BuildJobTabComponent },
             { path: '**', redirectTo: '' }
           ]
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class JobPageRoutingModule {}
