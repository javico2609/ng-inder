import { environment } from './../../environments/environment.prod';
import { TOKEN } from './../../global-properties/properties';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import { Observable } from "rxjs/Observable";
import * as props from '../../global-properties/properties';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TinderProvider {

    constructor(private http: HttpClient) { }

    getNewTinder(count: number): Observable<any> {
        return this.http.get<Array<TinderModel>>( environment.base_endpoint + `/?results=${count}`).map( (result: any) => result.results);
    }
}
