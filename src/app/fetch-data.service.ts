import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../app/page';
@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private key: string;
  private url: string;
  private aString: String = 'false';
  getPage(s: string, pageNos: string, adult: boolean): Observable<Page[]> {
    if (adult) this.aString = 'true';
    this.key = '35b992a2fad377f6ffd24bc4ddcea911';
    this.url =
      'https://api.themoviedb.org/3/search/movie?api_key=' +
      this.key +
      '&language=en-US&query=' +
      s +
      '&page=' +
      pageNos +
      '&include_adult=' +
      this.aString;

    return this.http.get<Page[]>(this.url);
  }
  constructor(private http: HttpClient) {}
}
