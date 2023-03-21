import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }

  getuserDetails(name:string):Observable<User>{

    let url="https://api.github.com/users/"+ name;
    return this.http.get<User>(url);
  }
}
