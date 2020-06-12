import { Routes, RouterModule} from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '', component: LoginPageComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class LoginPageRoutingModule {}
