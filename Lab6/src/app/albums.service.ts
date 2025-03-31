import {Injectable} from '@angular/core';
import {Observable, of, switchMap} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Album, Photo} from "../models";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClient) {
  }

  getPhoto(albumId: number){
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
  }

  getAlbums() {
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number ) {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)

  }

  addAlbum(album: Album) {
    return this.client.post<Album>('https://jsonplaceholder.typicode.com/albums',album )
  }

  delAlbum(id: number ){
    return this.client.delete<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }

  updAlbumTitle(id: number , newTitle: string): Observable<Album> {
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`, { title: newTitle });
  }
}
