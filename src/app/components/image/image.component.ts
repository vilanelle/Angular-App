import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() image = [];

  constructor(private dataService : DataService, private route : ActivatedRoute, private location : Location) { }

  ngOnInit() {
    this.getImage();
  }

  getImage(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getImage(id)
    .subscribe(img => this.image = img[0]);
  }

  goBack() : void {
    this.location.back();
  }

}
