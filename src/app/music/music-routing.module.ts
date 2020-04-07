import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TracksComponent } from './tracks/tracks.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { MusicComponent } from './music.component';

const routes: Routes = [
  {
    path: '',
    component: MusicComponent,
    children: [
      { path: 'tracks', component: TracksComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'artists', component: ArtistsComponent },
    ]
  },
  { path: '**', redirectTo: 'tracks' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
