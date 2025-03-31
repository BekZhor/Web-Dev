import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album} from "../../models";
import {AlbumsService} from "../albums.service";
import {Location} from "@angular/common";

@Component({
    selector: 'app-albumsdetail',
    templateUrl: './albumsdetail.component.html',
    styleUrl: './albumsdetail.component.css',
    standalone: false
})
export class AlbumsdetailComponent {
  album: Album | undefined;

  constructor(private albumService: AlbumsService,
              private router: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getAlbum();
  }


  getAlbum() {
    this.router.paramMap.subscribe((params) => {
       let  id = Number(params.get('id'));
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
      });
    })
  }

  Return(){
    this.location.back();
  }

  newtitle! : string

  upd(id:number, newTitle=this.newtitle){
    
    return this.albumService.updAlbumTitle(id,newTitle).subscribe(()=>{
      if(this.album){
        this.album.title = newTitle
      }
    })
  

  }
}
