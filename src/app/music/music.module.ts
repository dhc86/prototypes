import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { ArtistsComponent } from './artists/artists.component';
import { TracksComponent } from './tracks/tracks.component';
import { MusicRoutingModule } from './music-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    MusicComponent,
    ArtistsComponent,
    TracksComponent,
    SearchComponent
  ]
})
export class MusicModule { }
