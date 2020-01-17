import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { IImage } from '../types/image.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public isLoading: boolean;
  public images: IImage[] = [];
  public filteredImages: IImage[] = [];

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.loadImages();
  }

  private loadImages() {
    this.photosService.getImages().subscribe(
      (response) => {
        this.isLoading = false;
        this.images = response;
        this.filteredImages = response;
      },
      (error) => {
        this.isLoading = false;
        alert('Something went wrong');
        console.log(error);
      }
    );
  }

}
