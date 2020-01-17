import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { IImage } from '../types/image.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public images: IImage[] = [];
  public filteredImages: IImage[] = [];

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.loadImages();
  }

  private loadImages() {
    this.photosService.getImages().subscribe(
      (response) => {
        console.log('response :', response);
        this.images = response;
        this.filteredImages = response;
      },
      (error) => {
        alert('Something went wrong');
        console.log(error);
      }
    );
  }

}
