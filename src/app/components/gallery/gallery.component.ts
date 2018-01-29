import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images : Object[] = [];
  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getImages().subscribe(photos => this.images = photos.slice(0,10));
  }

}
