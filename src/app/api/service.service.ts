import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // private baseUrl = 'http://localhost:4000/v1/app';
  private baseUrl = 'https://etitc-mobiles.herokuapp.com/v1/app';

  constructor(private http: HttpClient) {
  }

  public listPlaces() {
    return this.httpGet('/places');
  }

  public getPlace(id: string) {
    return this.httpPost('/place/id', {id});
  }

  public login(email: string): Observable<any> {
    return this.httpPost('/users/login', {email});
  }

  public updateUser(id: string, name: string, email: string): Observable<any> {
    return this.httpPost('/users', {id, email, name});
  }

  private httpPost(path: string, body: any): Observable<any> {
    return this.http.post(this.baseUrl + path, body);
  }

  private httpGet(path: string): Observable<any> {
    return this.http.get(this.baseUrl + path);
  }
}
