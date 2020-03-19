import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, GuardsCheckEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading = false;

  constructor(
    private router: Router
  ){
    this.router.events.subscribe((event: Event)=> {
      if(event instanceof NavigationStart) {
        this.isLoading = true;
      }
      if(event instanceof NavigationEnd) {
        this.isLoading = false;
      }
      if(event instanceof GuardsCheckEnd && event.shouldActivate === false) {
        this.isLoading = false;
      }
    })
  }
}
