import { Routes, RouterModule} from '@angular/router';
import { JobListPageComponent } from './components/job-list-page/job-list-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '', component: JobListPageComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class JobListPageRoutingModule {}
