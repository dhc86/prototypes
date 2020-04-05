export class Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj?: any) {
    this.id              = obj && obj.id             || null;
    this.title           = obj && obj.title          || null;
    this.description     = obj && obj.description    || null;
    this.thumbnailUrl    = obj && obj.thumbnailUrl   || null;
    // this should be retuerned by a function...
    this.videoUrl        = obj && obj.videoUrl       || `https://www.youtube.com/watch?v=${this.id}`;
  }
}
