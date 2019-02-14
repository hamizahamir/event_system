import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

@Injectable()
export class HomeService {

    public apiServices = SERVER_URL + 'get_service';
    public apiOrigin = SERVER_URL + 'get_origin';
    public apiDestination = SERVER_URL + 'get_destination';

    constructor(public http: Http) {
        this.http = http;
    }

    getServices() :Observable<any> {
        return this.http.get(this.apiServices)
            .map(res => res.json())
            .catch(this.handleError);
    }

    getOrigin(service:string) :Observable<any> {
        return this.http.get(this.apiOrigin+ "?service="+service)
            .map(res => res.json())
            .catch(this.handleError);
    }

    getDestination(origin:string) :Observable<any> {
        return this.http.get(this.apiDestination+ "?origin="+origin)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        return Observable.throw(error || 'Unknown Application Error');
    }
}
