import { MyGitComponent } from './../my-git/my-git.component';
import { SearchService } from './../../services/search.service';
import { Users } from './../../classes/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  user: Users;
  username: string;
  reponame: string;
  // isShowUserForm = false;
  // isShowRepoForm = false;

  constructor(private  searchService:SearchService) { }
  // toggleUserForm() {
  //   this.isShowUserForm = !this.isShowUserForm;
  // }

  // toggleRepoForm() {
  //   this.isShowRepoForm = !this.isShowRepoForm;
  // }

  // searchResult() {
  //   this.username = this.searchService.get(this.username)
  //   this.searchService.userInfoRequest(this.username)
  //   this.user = this.searchService.user
  //   // this.searchService.userRepoRequest(this.username)
  //   // this.repos = this.searchService.repos
  //   console.log(this.searchResult)
  // }
  findProfile() {
    this.searchService.get(this.username);
    this.searchService.userInfoRequest(this.username)
    this.user = this.searchService.user
    // this.searchService.userRepoRequest(this.username)
    // this.repos = this.searchService.repos
    console.log(this.findProfile)
  }

  ngOnInit(): void {
  }

}
