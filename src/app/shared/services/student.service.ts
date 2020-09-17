import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getStudents() : Observable<any> {
  	return this.http.get(`${this.url}/students.json`);
  }
  // public getStudentsById(id: any) : Observable<any> {
  //   return this.http.get(`${this.url}/students.json?orderBy="ownerId"&equalTo="${id}"&print=pretty`);
  // }

  public addStudent(student: any) : Observable<any> {
  	return this.http.post(
  		`${this.url}/students.json`,
  		student
  	);
  }

  public deleteStudent(id: any) : Observable<any> {
    return this.http.delete(`${this.url}/students/${id}.json`)
  }
  
  public updateStudent(id: any, student: any) : Observable<any> {
    return this.http.put(
      `${this.url}/students/${id}.json`,
      student
    );
  }

}