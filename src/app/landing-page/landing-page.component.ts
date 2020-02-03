import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { IImage } from '../types/image.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public grid: boolean;
  public gridView: string;
  public listView: string;
  private searchValue: string;
  public list: boolean;


  public isLoading: boolean;
  public images: IImage[] = [];
  public filteredImages: IImage[] = [];
  public events: IImage[] = [];

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.loadImages();
    this.gridView = 'grid';
    this.listView = 'list';
  }

  public loadEmitedViewChange(data: boolean) {
    this.grid = data;
    if (this.grid) {
      this.gridView = 'list';
    } else {
      this.gridView = 'grid';
    }
  }

  public onViewChange(data: boolean) {
    this.list = data;
    if (this.list) {
      this.listView = 'grid';
    } else {
      this.listView = 'list';
    }
  }

  private loadImages() {
    this.photosService.getImages().subscribe(
      (response) => {
        this.isLoading = false;
        this.images = response.slice(0, 6);
        this.filteredImages = response.slice(0, 6);
        this.events = response.slice(21, 24);
        console.log('response :', this.filteredImages);
      },
      (error) => {
        this.isLoading = false;
        alert('Something went wrong');
        console.log(error);
      }
    );
  }

}
