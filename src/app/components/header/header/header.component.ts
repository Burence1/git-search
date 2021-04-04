import { SearchService } from './../../../services/search.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:any;
  reponame:any;


  constructor(private searchService: SearchService, private router: Router ) { }

 
  ngOnInit(): void {
  }

}
