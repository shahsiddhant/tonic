import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Customer, TokenResponse, TokenPayload } from '../customer/cusotmer';

@Injectable()
export class LoginService {
    private token: string;

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }


    public register(user: TokenPayload): Observable<any> {
        return this.request('post', 'register', user);
    }

    public login(newCusomter: TokenPayload): Observable<any> {
        return this.request('post', 'login', newCusomter);
    }

    public profile(): Observable<any> {
        return this.request('get', 'profile');
    }

    // TODO: Move this to its own service called httpService
    // Add standard error handling
    private request(method: 'post' | 'get', type: 'login' | 'register' | 'profile', user?: TokenPayload): Observable<any> {
        let base;

        if (method === 'post') {
            base = this.http.post(`http://localhost:4300/api/${type}`, user);
        } else {
            base = this.http.get(`http://localhost:4300/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
        }

        const request = base.
            map((data: TokenResponse) => {
                if (data.token) {
                    this.saveToken(data.token);
                }
                return data;
            });
        return request;
    }

    private saveToken(token: string) {
        this.token = token;
        window.sessionStorage.setItem('token', token);
    }

    private getToken(): string {
        if (!this.token) {
            this.token = localStorage.getItem('token');
        }
        return this.token;
    }

    public logout() {
        this.token = '';
        window.sessionStorage.removeItem('token');
        this.router.navigateByUrl('/');
    }

    public getCustomerDetails(): Customer {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        } else {
            return null;
        }
    }

    public isLoggedIn(): boolean {
        const user = this.getCustomerDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        } else {
            return false;
        }
    }

}
