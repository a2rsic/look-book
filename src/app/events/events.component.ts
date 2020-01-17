import { Component, OnInit, Input } from '@angular/core';
import { IImage } from '../types/image.interface';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public list: boolean;

  @Input() images: IImage[] = [];

  constructor() { }

  ngOnInit() {
  }

  public onViewChange(data: boolean) {
    this.list = data;
  }

}
