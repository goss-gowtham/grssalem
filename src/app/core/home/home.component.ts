import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactForm } from '../contact/contact.component';
import { NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  galleryOptions;
  galleryImages;
  images = ['assets/home-slide/Soil (2).jpg', 'assets/home-slide/Food.jpg', 'assets/home-slide/Food2.jpg', 'assets/home-slide/UV.jpg', 'assets/home-slide/Soil (3).jpg', 'assets/home-slide/soil.jpg', 'assets/home-slide/water.jpg', 'assets/home-slide/Water (2).jpg', 'assets/home-slide/Air.jpg', 'assets/home-slide/Water.webp']
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '350px',
        preview: false,
        thumbnails: false,
        imageAnimation: NgxGalleryAnimation.Zoom,
        previewFullscreen: false,
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        imageAutoPlayInterval: 2000,
        previewAutoPlay: true,
        previewAutoPlayPauseOnHover: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = this.images.map(data => {
      return { small: data, medium: data, big: data }
    })
  }

  openDialog() {
    this.dialog.open(ContactForm, {
      width: 'auto',
      height: '100vh',
      minWidth: '50vw',
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: {
        title: 'Apply for Testing'
      }
    });
  }

}
