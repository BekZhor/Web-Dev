import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { AlbumsComponent} from "./albums/albums.component";
import { AlbumsdetailComponent} from "./albumsdetail/albumsdetail.component";
import { AlbumsphotosComponent} from "./albumsphotos/albumsphotos.component";

const routes: Routes = [{path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:id', component: AlbumsdetailComponent},
  {path: 'albums/:id/photos', component: AlbumsphotosComponent},
  {path: '',redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
