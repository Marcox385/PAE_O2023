import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Gallery } from './../interfaces/gallery';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient: HttpClient) { }

  getPhotos(albumId: string): Observable<Gallery[]> {
    const url = environment.apiUrl + `photos?albumId=${albumId}`;
    return this.httpClient.get<Gallery[]>(url);
  }
}
