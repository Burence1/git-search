import { Router } from '@angular/router';
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
  username: any;
  user: Users;
  repos: Repos[];
  reponame: any;

  constructor(private searchService: SearchService, private router: Router) {
    this.username = localStorage.getItem("datas");
    // if (this.username == null) {
    //   this.username = "Burence1"
    // } else {
    //   this.username = this.username
    // }
    this.username = this.username == null? "Burence1" : this.username
    this.searchService.userInfoRequest(this.username)
    this.user = this.searchService.user
  }
  findProfile() {
    this.searchService.userInfoRequest(this.username)
    this.user = this.searchService.user
    this.searchService.userRepoRequest(this.username)
    this.repos = this.searchService.repos
    this.username = ''
    // localStorage.setItem("datas", this.username);
    // this.router.navigate(['/user']);
  }
 
   
  
  findRepos() {
    localStorage.setItem("datas", this.reponame);
    this.router.navigate(['/repositories']);
    this.reponame = ''
  }

  ngOnInit(): void {
    this.username = localStorage.getItem("datas");
    if(this.username == null) {
      this.username = "Burence1"
    } else {
      this.username = this.username 
    }
    // this.username = this.username == null? "Burence1" : this.username
    this.searchService.userInfoRequest(this.username)
    this.user = this.searchService.user
    this.searchService.userRepoRequest("Burence1")
    this.repos = this.searchService.repos
  }

}
