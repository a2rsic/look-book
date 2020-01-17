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
    this.filteredImages = this.filteredImages.sort(this.compareImages);
  }

  private compareImages(a, b) {

    const sumA = a.width + a.height;
    const sumB = b.width + b.height;

    if (sumA < sumB) {
      return 1;
    } else if (sumB < sumA) {
      return - 1;
    }
    return 0;
  }

  private filterImages(inputValue) {
    inputValue.trim().toLowerCase();
    this.filteredImages = this.images.filter(image => image.author.trim().toLowerCase().includes(inputValue));
  }

}
