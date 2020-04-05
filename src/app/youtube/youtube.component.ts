import { Component, OnInit } from '@angular/core';
import { Video } from './models/video';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  isLoading: boolean;
  results: Video[];

  constructor() { }

  ngOnInit() {
  }

  updateResults(event) {
    // console.log(event);
    this.results = event;
  }

}
