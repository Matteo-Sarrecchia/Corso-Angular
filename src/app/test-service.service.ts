import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  URL='http://localhost:3000/0'

  constructor(private httClient:HttpClient) {}

  getAll():Observable<User[]>{
    return this.httClient.get<User[]>(this.URL)
  }

  post(persona:User):Observable<User>{
    return this.httClient.post<User>(this.URL, persona)
  }


// METODO CREATO IN SERVICE PER ESSERE RIUTILIZZATO
addizione(){
  return 1+1
}

}
