import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    public authenticate(): Observable<any> {
        return this.http.get('https://www.google.com');
    }

}
