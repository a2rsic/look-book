import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('inputValue', { static: false }) inputValue: ElementRef;

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
  }

  public emitSearchValue() {
    const value = this.inputValue.nativeElement.value;
    this.interactionService.emitValue(value);
  }

}
