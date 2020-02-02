import { Component, OnInit, Input } from '@angular/core';
import { IImage } from 'src/app/types/image.interface';

@Component({
  selector: 'app-events-grid-view',
  templateUrl: './events-grid-view.component.html',
  styleUrls: ['./events-grid-view.component.scss']
})
export class EventsGridViewComponent implements OnInit {

  @Input() image: IImage;

  constructor() { }

  ngOnInit() {
  }

}
