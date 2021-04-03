import { Repos } from './../../classes/repos';
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
  repos:Repos[];
  reponame:any;

  constructor(private searchService:SearchService, private http:HttpClient) { }

  findProfile() {
    this.searchService.userInfoRequest(this.username)
    this.user = this.searchService.user
    this.searchService.userRepoRequest(this.username)
    this.repos = this.searchService.repos
  }

  findRepos() {
    this.searchService.userRepoRequest(this.reponame)
    this.repos = this.searchService.repos

    console.log(this.repos)
  }

  ngOnInit() {
    this.searchService.userInfoRequest("Burence1")
    this.user = this.searchService.user
    this.searchService.userRepoRequest("Burence1")
    this.repos = this.searchService.repos
  }

}
