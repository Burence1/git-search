import { RepoName } from './../../classes/repo-name';
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
  reposByName: RepoName[];

  constructor(private searchService: SearchService, private router: Router) {
  }
  findRepoName(){
    this.searchService.repoSearchName(this.reponame)
    this.repos = this.searchService.reposByName
    this.reponame = ''
  }

  findProfile() {
    localStorage.setItem("username", this.username);
    this.router.navigate(['/users']);
    this.username = ''
  }

  ngOnInit(): void {
    this.reponame = localStorage.getItem("reponame");
    // if (this.reponame == null) {
    //   this.reponame = "Burence1"
    // } else {
    //   this.reponame = this.reponame
    // }

    this.searchService.userRepoRequest("Burence1")
    this.repos = this.searchService.repos
  }

}
