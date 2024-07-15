import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'http://localhost:3000/api/resume';

  constructor(private http: HttpClient) { }

  createResume(resume: any): Observable<any> {
    return this.http.post(this.apiUrl, resume);
  }

  getResume(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
