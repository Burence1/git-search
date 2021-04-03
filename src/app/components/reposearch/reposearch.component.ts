import { RepoName } from './../../classes/repo-name';
import { RepoNumber } from './../../classes/repo-number';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reposearch',
  templateUrl: './reposearch.component.html',
  styleUrls: ['./reposearch.component.css']
})
export class ReposearchComponent implements OnInit {
  repoName: RepoName[];
  reponame: string;
  reposNumber: RepoNumber;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

}
