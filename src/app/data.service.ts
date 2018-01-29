import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from './components/my-component/my-component.component';
import { MessageService } from './message.service';

@Injectable()
export class DataService {

  constructor(public http : Http, private messageService : MessageService) { }

  getUsers(){
    const timestamp = new Date();
    this.messageService.add(timestamp.toLocaleDateString()+', '+timestamp.toLocaleTimeString()+': DataService: User data fetched');
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map(data => data.json());

  }

  getUser(id: number) : Observable<User>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map(data => {
      return data.json().filter(item => item.id === id
      )}
    )}

  getImages(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map( data => data.json());
  }

getImage(id){
  return this.http.get('https://jsonplaceholder.typicode.com/photos')
  .map(data => data.json().filter(
    img => img.id === id
  ));

}



}
