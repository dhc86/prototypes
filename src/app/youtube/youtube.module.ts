import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeComponent } from './youtube.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeSeachService, YOUTUBE_API_KEY, YOUTUBE_API_URL } from './services/youtube-seach.service';
import { SearchBoxComponent } from './components/components/search-box/search-box.component';
import { VideoResultsComponent } from './components/components/video-results/video-results.component';

@NgModule({
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    YoutubeComponent,
    SearchBoxComponent,
    VideoResultsComponent
  ],
  providers:  [
    {provide: YoutubeSeachService, useClass: YoutubeSeachService},
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
    ]
})
export class YoutubeModule { }
