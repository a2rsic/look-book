import { Component, OnInit, Input } from '@angular/core';
import { IImage } from '../types/image.interface';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  public grid: boolean;

  @Input() images: IImage;

  constructor() { }

  ngOnInit() {
  }

  public loadEmitedViewChange(data: boolean) {
    this.grid = data;
  }

}
