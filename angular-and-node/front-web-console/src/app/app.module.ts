import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const Routes = [

  {
    path: '' , 
    redirecTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts' , 
    component: PostsComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
