import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tickets-title',
  templateUrl: './tickets-title.component.html',
  styleUrls: ['./tickets-title.component.scss']
})
export class TicketsTitleComponent implements OnInit {

  public isGrid: boolean;

  @Output() emitedView = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public emitViewChange() {
    this.isGrid = !this.isGrid;
    this.emitedView.emit(this.isGrid);
  }

}
