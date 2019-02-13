import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

@Injectable()
export class HomeService {

    public apiServices = SERVER_URL + 'json3.php';
    public apiOrigin = SERVER_URL + 'json3.php';
    public apiDestination = SERVER_URL + 'json3.php';

    constructor(public http: Http) {
        this.http = http;
    }

    getServices() :Observable<any> {
        
        return this.http.get(this.apiServices)
            .map(res => res.json())
            .catch(this.handleError);
    }

    getOrigin(id:string) :Observable<any> {
        
        return this.http.get(this.apiOrigin+ "?id="+id)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        return Observable.throw(error || 'Unknown Application Error');
    }
}
