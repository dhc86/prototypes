import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-boxes',
  templateUrl: './all-boxes.component.html',
  styleUrls: ['./all-boxes.component.scss']
})
export class AllBoxesComponent implements OnInit {
  showBox1: boolean = true;
  showBox2: boolean = true;
  showBox3: boolean = true;
  showBox4: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
