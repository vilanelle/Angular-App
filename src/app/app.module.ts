import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTabsModule, MatSidenavModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { MessageComponent } from './components/message/message.component';

import { DataService } from './data.service';
import { MessageService } from './message.service';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageComponent } from './components/image/image.component';

const appRoutes: Routes = [
  {path: 'userlist', component: MyComponentComponent},
  {path: '', redirectTo: '/userlist', pathMatch: 'full'},
  {path:'details/:id', component: UserComponentComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'image/:id', component: ImageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    UserComponentComponent,
    MessageComponent,
    GalleryComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [DataService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
