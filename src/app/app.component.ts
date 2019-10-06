import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items:Array<Object> = [
    {
      image:"audi",
      img_count:5,
    },
    {
      image:"ls1",
      img_count:3
    },
    {
      image:"ls2",
      img_count:6
    },
    {
      image:"ls3",
      img_count:8
    },
    {
      image:"ls4",
      img_count:3,
    },
    {
      image:"ls5",
      img_count:3
    },
    {
      image:"ls6",
      img_count:3
    },
    {
      image:"ls7",
      img_count:3
    },
    {
      image:"ls8",
      img_count:3
    },
    {
      image:"ls9",
      img_count:3
    }
  ];
}
