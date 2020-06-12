import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { AccessDeniedPageComponent } from './shared/components/access-denied-page/access-denied-page.component';
import { NoContentPageComponent } from './shared/components/no-content-page/no-content-page.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { AuthGuardService as AuthGuard } from './core/services/auth-guard.service';
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'init',
        data: {
            title: 'init'
        }
    },
    {
        path: 'init',
        loadChildren: () => import('./init/init.module').then(m => m.InitModule),
        canActivate: [AuthGuard],
        data: {
            title: 'Init'
        }
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule),
        data: {
            title: 'Login'
        }
    },
    {
        path: '500',
        component: ErrorPageComponent
    },
    {
        path: '403',
        component: AccessDeniedPageComponent
    },
    {
        path: '204',
        component: NoContentPageComponent
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);

