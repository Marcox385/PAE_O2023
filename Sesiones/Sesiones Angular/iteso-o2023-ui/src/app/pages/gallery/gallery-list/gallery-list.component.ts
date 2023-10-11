import { Component, OnInit, OnDestroy } from '@angular/core';

import { Gallery } from 'src/app/shared/interfaces/gallery';
import { GalleryService } from 'src/app/shared/services/gallery.service';

@Component({
  selector: 'MRCH-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent {
  photos: Gallery[] = [];

  constructor(private galleryService: GalleryService) {
    console.log(galleryService);
    this.galleryService = galleryService;
  }

  ngOnInit(): void {
    console.log('Gallery component initialized!');

    this.galleryService.getPhotos('4').subscribe({
      next: (response: Gallery[]) => {
        this.photos = response;
      },
      error: (err: Error) => {
        console.log('Something failed...', err);
      }
    });
  }

  ngOnDestroy(): void {
      console.log('Gallery component destroyed!');
  }
}
