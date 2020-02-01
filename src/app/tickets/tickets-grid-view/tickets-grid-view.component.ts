import { Component, OnInit, Input } from '@angular/core';
import { IImage } from 'src/app/types/image.interface';

@Component({
  selector: 'app-tickets-grid-view',
  templateUrl: './tickets-grid-view.component.html',
  styleUrls: ['./tickets-grid-view.component.scss']
})
export class TicketsGridViewComponent implements OnInit {

  @Input() image: IImage;

  constructor() { }

  ngOnInit() {
  }

}
