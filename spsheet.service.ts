import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http,HTTP_BINDINGS,Headers,RequestOptions,Response} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class SpsheetService {

    data:any;
	constructor(private _http:Http){}
    fetchData(){
       return this._http.get('app/jsondata/hcdata.json')
        .map(res => res.json());
    }
    postData(pdata:any){
        let bodyString = JSON.stringify(pdata);
        console.log(bodyString);
        //console.log(bodyString);
       //console.log(JSON.parse(bodyString));
        
      
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers }); 

        return this._http.put('http://localhost:4000/a', bodyString, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 

}
}
