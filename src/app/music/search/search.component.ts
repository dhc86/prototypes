import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Track } from '../models/track';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() label: string;
  @Input() isLoading: boolean;
  @Output() searcResults: EventEmitter<Object[]> = new EventEmitter<Object[]>();

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
  }

  searchQuery(query) {
    this.isLoading = true;
    this.spotifyService
      .searchTrack(query)
      .subscribe(
        (tracks: Track[]) => {
          this.isLoading = false;
          this.searcResults.emit(tracks)
        }
      )
  }
}
