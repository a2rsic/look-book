import { Component, OnInit, Input } from '@angular/core';
import { IImage } from '../types/image.interface';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public list: boolean;
  public view: string;

  @Input() images: IImage[] = [];

  constructor() { }

  ngOnInit() {
    this.view = 'list';
  }

  public onViewChange(data: boolean) {
    this.list = data;
    if (this.list) {
      this.view = 'grid';
    } else {
      this.view = 'list';
    }
  }

}
