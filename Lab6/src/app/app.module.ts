import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsdetailComponent } from './albumsdetail/albumsdetail.component';
import { AlbumsphotosComponent } from './albumsphotos/albumsphotos.component';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        AlbumsComponent,
        AlbumsdetailComponent,
        AlbumsphotosComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
