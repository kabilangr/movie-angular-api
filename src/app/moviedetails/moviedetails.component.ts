import { Component, OnInit } from '@angular/core';
import { MovielistComponent } from '../movielist/movielist.component';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  constructor(public d: MovielistComponent) {}
  public item: any;

  ngOnInit(): void {
    this.item = this.d.getdetails();
    console.log(this.item);
  }
}
