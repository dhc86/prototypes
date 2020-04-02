import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-general-button',
  templateUrl: './general-button.component.html',
  styleUrls: ['./general-button.component.scss']
})
export class GeneralButtonComponent implements OnInit {
  @Input() label: string;
  @Output() callBalk: Function;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.callBalk();
  }

}
