import { Component , OnInit} from '@angular/core';
import { Album} from "../../models";
import {AlbumsService} from "../albums.service";

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrl: './albums.component.css',
    standalone: false
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumService: AlbumsService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.albumService.getAlbums().subscribe((response) => {
      this.albums = response;
    });
  }

  Delete(id: number) {
    return this.albumService.delAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id != id);
    })
  }
}
