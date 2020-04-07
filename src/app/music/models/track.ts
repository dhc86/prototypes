import { Album } from './album';
import { Artist } from './artist';
import { Type } from 'class-transformer';

export class Track {
  href: string;
  id: string;
  name: string;
  popularity: number;
  explicit: boolean;

  @Type(() => Album)
  album: Album;

  @Type(() => Artist)
  artists: Artist[];

  constructor(args: Track) {
    Object.assign(this, args);
  }
}
