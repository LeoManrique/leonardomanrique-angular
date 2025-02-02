import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private dataUrl = 'assets/data/about.json';

  constructor(private http: HttpClient) {}

  getAboutData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}
