import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../../environments/app-config';

const DEFAULT_HEADERS: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
});

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private rest: HttpClient){}


    public get<T>(endpoint: string, params?: {[param: string]: string | string[]}): Observable<T>{
        const url = this.getUrl(endpoint);

        const options = {
            headers: this.getRequiredHeaders(),
            params
        };
        return this.rest.get<T>(url, options);
    }

    public post<T>(endpoint: string, params?: {[param: string]: string | string[]}, body?: any): Observable<T>{
        const url = this.getUrl(endpoint);

        const options = {
            headers: this.getRequiredHeaders(),
            params
        };
        return this.rest.post<T>(url, body , options).pipe();
    }

    private getUrl(endpoint: string): string{
       return `${APP_CONFIG.BASE_API_URL}${endpoint}`;
    }
    private getRequiredHeaders(): HttpHeaders{
        // добавить jwt токен в header здесь
        return DEFAULT_HEADERS;
    }
}
