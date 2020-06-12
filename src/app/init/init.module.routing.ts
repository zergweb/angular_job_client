import { Routes, RouterModule} from '@angular/router';
import { InitComponent } from './components/init/init.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '', component: InitComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InitRoutingModule {}
