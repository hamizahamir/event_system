import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

@Injectable()
export class MainService {

    // public apiSerach = SERVER_URL + 'get_schedule';
    public apiSearch = "http://47.254.213.69:8080/get_schedule?service=KOMUTER%20UTARA&origin=43100&destination=40500";

    constructor(public http: Http) {
        this.http = http;
    }

    search() :Observable<any> {
        return this.http.get(this.apiSearch)
            .map(res => res.json())
            .catch(this.handleError);
    }

    
    private handleError(error: any): Observable<any> {
        return Observable.throw(error || 'Unknown Application Error');
    }
}
