import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
  users : User[];
  showUsers : boolean = false;


  constructor(private dataService : DataService) {  }
  ngOnInit() {
      this.dataService.getUsers().subscribe(users =>{
      this.users = users;
      this.users.map( user => {
        user.isEditable = false;
      });
    });
  }

  toggleUsers(){
    this.showUsers = !this.showUsers;
  }

  toggleUserEdit(user){
    user.isEditable = !user.isEditable;
    }

  toggleHeaderStyle(e){
    e.target.classList.toggle('mid-header--active');
  }

}


export interface User {
  name : string,
  phone : string,
  company : Object,
  isEditable : boolean
}
