import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album,Photo} from "../../models";
import {AlbumsService} from "../albums.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-albumsphotos',
  templateUrl: './albumsphotos.component.html',
  styleUrl: './albumsphotos.component.css'
})
export class AlbumsphotosComponent {
  photo: Photo[] | undefined;
  

  constructor(private albumService: AlbumsService,
              private router: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getPhoto();
  }


  getPhoto() {
    this.router.paramMap.subscribe((params) => {
      let  id = Number(params.get('id'));
      this.albumService.getPhoto(id).subscribe((photo)=>{
        this.photo = photo;
      })
    
    })
  }

  Return(){
    this.location.back();
  }

}
