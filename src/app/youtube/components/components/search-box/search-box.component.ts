import { Component, OnInit, EventEmitter, Output, ElementRef,  } from '@angular/core';
import { Video } from '../../../models/video';
import { YoutubeSeachService } from '../../../services/youtube-seach.service';
import { filter, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() videoResults: EventEmitter<Video[]> = new EventEmitter<Video[]>();

  constructor(
    private youtubeService: YoutubeSeachService,
    private element: ElementRef
  ) { }

  ngOnInit() {
    this.isLoading.emit(false);
    this.videoResults.emit([]);
        // convert the `keyup` event into an observable stream
        Observable.fromEvent(this.element.nativeElement, 'keyup')
        .map((e: any) => e.target.value) // extract the value of the input
        .filter((text: string) => text.length > 1) // filter out if empty
        .debounceTime(550)                       // only once every 250ms
        .do(() => this.isLoading.emit(true))         // enable loading
        // search, discarding old events if new input comes in
        .map((query: string) => this.youtubeService.search(query))
        .switch()
        // act on the return of the search
        .subscribe(
          (results: Video[]) => { // on sucesss
            this.isLoading.emit(false);
            this.videoResults.emit(results);
          },
          (err: any) => { // on error
            console.log(err);
            this.isLoading.emit(false);
          },
          () => { // on completion
            this.isLoading.emit(false);
          }
        );
  }

  onSearchChange(value){
    console.log(value)
    // this.youtubeService.search(value)
    // .debounceTime(500)
    // .filter((event: any) =>  event.length > 3 )
    // .subscribe(
    //     (val) => {
    //       console.log(val);
    //       this.videoResults.emit(val);
    //       this.isLoading.emit(false);
    //     }
    //   )
  }

  search(word) {
    // 1. Filter out any empty or short queries
    // 2. “debounce” the input, that is, don’t search on every character but only after the
    // user has stopped typing after a short amount of time
    // 3. discard any old searches, if the user has made a new search
    this.isLoading.emit(true);
    this.youtubeService.search(word)
      .subscribe(
        (val) => {
          console.log(val);
          this.videoResults.emit(val);
          this.isLoading.emit(false);
        }
      )
  }

}
