import { Router } from '@angular/router';
import { Repos } from './../../classes/repos';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-reposearch',
  templateUrl: './reposearch.component.html',
  styleUrls: ['./reposearch.component.css']
})
export class ReposearchComponent implements OnInit {
  username:any;
  reponame: any;
  repos: Repos[];

  constructor(private searchService: SearchService, private router: Router) {
    this.reponame = localStorage.getItem("datas");
    if (this.reponame == null) {
      this.reponame = "Burence1"
    } else {
      this.reponame = this.reponame
    }

    this.searchService.userRepoRequest("Burence1")
    this.repos = this.searchService.repos
  }
  findRepos() {
    this.searchService.userRepoRequest(this.reponame)
    this.repos = this.searchService.repos
    this.reponame = ''    
  }

  findProfile() {
    // this.searchService.userInfoRequest(this.username)
    // this.user = this.searchService.user
    // this.searchService.userRepoRequest(this.username)
    // this.repos = this.searchService.repos
    localStorage.setItem("datas", this.username);
    this.router.navigate(['/users']);
    this.username = ''
  }



  // findRepos() {
  //   localStorage.setItem("datas", this.reponame);
  //   this.router.navigate(['/repositories']);
  // }

  ngOnInit(): void {
    this.reponame = localStorage.getItem("datas");
    if (this.reponame == null) {
      this.reponame = "Burence1"
    } else {
      this.reponame = this.reponame
    }

    // this.searchService.userRepoRequest("Burence1")
    this.repos = this.searchService.repos
  }

}
