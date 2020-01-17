import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  @Input() images;

  constructor() { }

  ngOnInit() {
  }

}
