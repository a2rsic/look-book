import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public images = [];

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.loadImages();
  }

  private loadImages() {
    this.photosService.getImages().subscribe(
      (response) => {
        console.log('response :', response);
        this.images = response;
      }
    )
  }

}
