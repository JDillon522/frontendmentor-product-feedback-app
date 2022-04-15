import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { IUser } from '../state/state';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getUserInfo(): Observable<IUser> {
    return this.http.get<IUser>(`${env.apiUrl}/api/user/1`);
  }
}
