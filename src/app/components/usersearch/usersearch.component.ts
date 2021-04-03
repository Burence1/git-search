import { Repos } from './../../classes/repos';
import { SearchService } from './../../services/search.service';
import { Users } from './../../classes/users';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent implements OnInit {
  username: string;
  user: Users;
  repos: Repos[];
  reponame: any;

  constructor(private searchService: SearchService) { }
  findProfile() {
    this.searchService.userInfoRequest(this.username)
    this.user = this.searchService.user
    this.searchService.userRepoRequest(this.username)
    this.repos = this.searchService.repos
  }

  ngOnInit(): void {
    this.searchService.userInfoRequest("Burence1")
    this.user = this.searchService.user
  }

}
