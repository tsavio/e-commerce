import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './posts/posts.component';

const Routes = [

  {
    path: '' , 
    redirecTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts' , 
    component: PostComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
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
