import { Artist } from './artist';
import { Image } from './image';
import { Type } from 'class-transformer';

export class Album {
  album_type: string;

  href: string;
  id: string;
  name: string;
  release_date: string; // can be converted into a moment
  total_tracks: number;
  type: string;

  @Type(() => Image)
  images: Image[];

  @Type(() => Artist)
  artists: Artist[];

  constructor(args: Album) {
    Object.assign(this, args);
  }
}
