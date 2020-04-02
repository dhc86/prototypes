import { Component, OnInit } from '@angular/core';
import { GlassService } from '../../services/glass.service';
import { Glass } from '../../models/glass';

@Component({
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.scss']
})
export class GlassesComponent implements OnInit {
  isLoading: boolean = true;
  glasses: Glass[];
  constructor(
    private glassService: GlassService
  ) { }

  ngOnInit(): void {
    this.glassService.getAll().subscribe(data => {
      this.glasses = data;
      this.isLoading = false;
    })
  }

}
