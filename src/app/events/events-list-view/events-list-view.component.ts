import { Component, OnInit, Input } from '@angular/core';
import { IImage } from 'src/app/types/image.interface';

@Component({
  selector: 'app-events-list-view',
  templateUrl: './events-list-view.component.html',
  styleUrls: ['./events-list-view.component.scss']
})
export class EventsListViewComponent implements OnInit {

  @Input() image: IImage;

  constructor() { }

  ngOnInit() {
  }

}
