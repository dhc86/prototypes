import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/youtube/models/video';

@Component({
  selector: 'app-video-results',
  templateUrl: './video-results.component.html',
  styleUrls: ['./video-results.component.css']
})
export class VideoResultsComponent implements OnInit {
  @Input() result: Video;

  constructor() { }

  ngOnInit() {
  }

}
