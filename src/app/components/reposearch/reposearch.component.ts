import { Repos } from './../../classes/repos';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-reposearch',
  templateUrl: './reposearch.component.html',
  styleUrls: ['./reposearch.component.css']
})
export class ReposearchComponent implements OnInit {
  
  reponame: string;
  repos: Repos[];

  constructor(private searchService: SearchService) { }
  findRepos() {
    this.searchService.userRepoRequest(this.reponame)
    this.repos = this.searchService.repos

    console.log(this.repos)
  }

  ngOnInit(): void {
    this.searchService.userRepoRequest("Burence1")
    this.repos = this.searchService.repos
  }

}
