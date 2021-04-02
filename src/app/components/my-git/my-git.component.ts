import { HttpClient } from '@angular/common/http';
import { SearchService } from './../../services/search.service';
import { Users } from './../../classes/users';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-git',
  templateUrl: './my-git.component.html',
  styleUrls: ['./my-git.component.css']
})
export class MyGitComponent implements OnInit {
  username: string;
  user: Users;

  constructor(private searchService:SearchService) { }

  findProfile() {
    this.searchService.userInfoRequest(this.username)
    this.user = this.searchService.user
    // this.searchService.userRepoRequest(this.username)
    // this.repos = this.searchService.repos
    console.log(this.findProfile)
  }

  ngOnInit() {
    this.searchService.userInfoRequest("CollinsOduor")
    this.user = this.searchService.user
    // this.searchService.userRepoRequest("Burence1")
    // this.repos = this.searchGitService.repos
  }

}
