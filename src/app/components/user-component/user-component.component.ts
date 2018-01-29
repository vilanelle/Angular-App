import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../../data.service';
import { User } from '../my-component/my-component.component';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {
  @Input() user : User;

  constructor(private dataService : DataService, private route : ActivatedRoute, private location : Location) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getUser(id)
    .subscribe(user =>  this.user = user[0]);
  }

  goBack(): void{
      this.location.back();
  }

}
