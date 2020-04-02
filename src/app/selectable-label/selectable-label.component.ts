import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selectable-label',
  templateUrl: './selectable-label.component.html',
  styleUrls: ['./selectable-label.component.css']
})
export class SelectableLabelComponent implements OnInit {
  @Input("label") message: string;
  @Output() selectLabel = new EventEmitter<string>();
  classList: Array<string> = ['blue', 'round'];
  selectedMessge: string;

  constructor() { }

  ngOnInit() {
  }

  selectMessage(message: string): void {
    this.selectedMessge = message;
    this.selectLabel.emit(message);
  }

  isSelected(message: string ): boolean {
    if (!message || !this.selectedMessge) {
      return false;
    }

    return this.selectedMessge === message;
  }
}
