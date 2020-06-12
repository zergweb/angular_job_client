import { Injectable } from '@angular/core';
import { Router, Params, NavigationExtras, Route} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NavigateService {

    constructor(private router: Router){}

    public goToAccessDeniedPage(silent: boolean = true): void{
        this.router.navigate(['/403'], {skipLocationChange: silent});
    }
    public goToErrorPage(silent: boolean = true): void{
        this.router.navigate(['/500'], {skipLocationChange: silent});
    }
    public goToNotFoundPage(silent: boolean = true): void{
        this.router.navigate(['/404'], {skipLocationChange: silent});
    }
    public goToNoContentPage(silent: boolean = true): void{
        this.router.navigate(['/204'], {skipLocationChange: silent});
    }
}
