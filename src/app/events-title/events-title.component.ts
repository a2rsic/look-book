import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-events-title',
  templateUrl: './events-title.component.html',
  styleUrls: ['./events-title.component.scss']
})
export class EventsTitleComponent implements OnInit {


  public isList: boolean;

  @Output() emitViewChangeValue = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public emitViewChange() {
    this.isList = !this.isList;
    this.emitViewChangeValue.emit(this.isList);
  }

}
