import { Component, OnInit, Input } from '@angular/core';
import { IImage } from 'src/app/types/image.interface';

@Component({
  selector: 'app-tickets-list-view',
  templateUrl: './tickets-list-view.component.html',
  styleUrls: ['./tickets-list-view.component.scss']
})
export class TicketsListViewComponent implements OnInit {

  @Input() image: IImage;

  constructor() { }

  ngOnInit() {
  }

}
