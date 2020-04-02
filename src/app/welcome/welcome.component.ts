import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  messages: string[] = ['Welcome', 'to', 'my cool prtotype', 'App!']
  selectedMessage: string = 'No message selected yet!';
  constructor() { }

  ngOnInit(): void {

  }

  selectMessageLabel(event) {
    console.log(event);
    this.selectedMessage = event;
  }

}
