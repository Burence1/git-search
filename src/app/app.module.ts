import { HeaderComponent } from './components/header/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { MyGitComponent } from './components/my-git/my-git.component';
import { FormsModule } from '@angular/forms';
import { ReposearchComponent } from './components/reposearch/reposearch.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    MyGitComponent,
    ReposearchComponent,
    HeaderComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
