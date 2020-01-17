import { Component, OnInit, Input } from '@angular/core';
import { IImage } from '../types/image.interface';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  public grid: boolean;
  private searchValue: string;

  @Input() images: IImage[] = [];
  @Input() filteredImages: IImage[] = [];

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.value$.subscribe(
      (data) => {
        this.searchValue = data;
        this.filterImages(this.searchValue);
      }
    );
  }

  public loadEmitedViewChange(data: boolean) {
    this.grid = data;
  }

  public sortImages() {
    const sum = this.images.map(image => image.width + image.height).sort((a, b) => b - a);
    console.log('sum :', sum);
  }

  private filterImages(inputValue) {
    inputValue.trim().toLowerCase();
    this.filteredImages = this.images.filter(image => image.author.trim().toLowerCase().includes(inputValue));
    console.log(this.filteredImages);
  }

}
