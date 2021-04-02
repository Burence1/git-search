import { SearchResultComponent } from './../search-result/search-result.component';
import { Users } from './../../classes/users';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  // username: string;
  // user: Users;
  // searchResult: SearchResultComponent;
  // reponame: string;
  // isShowUserForm = false;
  // isShowRepoForm = false;

  constructor(private searchService:SearchService) { }

  // toggleUserForm() {
  //   this.isShowUserForm = !this.isShowUserForm;
  // }

  // toggleRepoForm() {
  //   this.isShowRepoForm = !this.isShowRepoForm;
  // }

  // findProfile() {
  //   this.searchService.get(this.username);
  //   this.searchService.userInfoRequest(this.username)
  //   this.user = this.searchService.user
  //   // this.searchService.userRepoRequest(this.username)
  //   // this.repos = this.searchService.repos
  // }

  // findRepos() {
  //   this.router.navigate(['/repo-result', this.reponame]);
  //   this.searchGitService.repoByNameRequest(this.reponame);
  //   this.reposByName = this.searchGitService.reposByName;
  //   this.searchGitService.repoByNameNumberRequest(this.reponame);
  //   this.numberOfRepos = this.searchGitService.numberOfRepos;
  // }

  ngOnInit(): void {
  }

}
