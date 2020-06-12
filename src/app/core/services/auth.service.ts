import { Injectable } from '@angular/core';
import { TOKEN_KEY } from '../const';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public isAuthenticated(): boolean{
        const token = localStorage.getItem(TOKEN_KEY);
        return token ? true : false;
    }

    public login(): void{
        localStorage.setItem(TOKEN_KEY, 'sometoken');
    }
    public exit(): void{
        const token = localStorage.removeItem(TOKEN_KEY);
    }
}
