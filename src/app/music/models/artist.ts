export class Artist {
  href: string;
  id: string;
  name: string;
  type: string;

  constructor(args: Artist) {
    Object.assign(this, args);
  }
}
