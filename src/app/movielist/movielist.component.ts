import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Page } from '../page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovielistComponent implements OnInit {
  constructor(public getdata: FetchDataService, private _router: Router) {}
  public pageNo: string;
  public s: Page[];
  public loading = false;
  public adult = false;
  public s1 = [];
  public data: any;
  searchMovie(search: string): void {
    this.loading = true;
    this.getdata.getPage(search, this.pageNo, this.adult).subscribe((data) => {
      this.s = data;
      this.loading = false;
      console.log(this.s);
      this.s1 = Object.entries(this.s);
      this.s1 = this.s1[3][1];
      console.log(this.s1);
    });
  }
  adultCheck(): void {
    this.adult = !this.adult;
  }
  poster(urlEnd: string) {
    urlEnd = 'https://image.tmdb.org/t/p/w500/' + urlEnd;
    return urlEnd;
  }
  details(detail: any) {
    this.data = detail;
    console.log(this.data);
  }
  getdetails() {
    console.log(this.data);
    return this.data;
  }
  ngOnInit(): void {}
}
