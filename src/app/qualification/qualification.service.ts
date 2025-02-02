import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QualificationService {
  private dataUrl = 'assets/data/qualification.json';

  constructor(private http: HttpClient) {}

  getQualifications(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}