import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-table-widget',
  templateUrl: './main-table-widget.component.html',
  styleUrls: ['./main-table-widget.component.scss']
})
export class MainTableWidgetComponent implements OnInit {
  @Input() title: string;
  @Input() buttonLabel: string;
  constructor() { }

  ngOnInit(): void {
  }

}
