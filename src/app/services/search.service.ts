import { RepoNumber } from './../classes/repo-number';
import { RepoName } from './../classes/repo-name';
import { Repos } from './../classes/repos';
import { Users } from './../classes/users';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  get(arg0: string): string {
    throw new Error('Method not implemented.');
  }
  user:Users;
  username:string;
  repos: Repos[] = [];
  reponame:string;
  repositories=[];
  reposName: RepoName[]=[];
  reposNumber: RepoNumber;


  constructor(private http: HttpClient) {
    this.user = new Users("", "", "", "", 0, 0, 0, new Date(), "", "");
    this.reposNumber = new RepoNumber(0)
  }
 

  userInfoRequest(username: any) {
    interface userApiResponse {
      name: string;
      login: string;
      bio: string;
      url: string;
      followers: number;
      following: number;
      public_repos: number; //check this out
      created_at: Date;
      avatar_url: string;
      email: string;
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<userApiResponse>(`${environment.ApiKey}${username}?access_token${username}?client_id=${environment.ApiKey}`).toPromise().then(response => {
        this.user.name = response.name
        this.user.login = response.login
        this.user.bio = response.bio
        this.user.url = response.url
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.public_repos = response.public_repos
        this.user.created_at = response.created_at
        this.user.avatar_url = response.avatar_url
        this.user.email = response.email
        resolve()
      },
        error => {
          this.user.login = "User not found"
          console.log("an error occured")
          reject(error)
        })
    })
    return promise
  }

  userRepoRequest(reponame: any) {
    interface repoApiResponse {
      name: string,
      description: string,
      language: string,
      html_url: string
      forks:any,
    }
    let promise = new Promise<void>((resolve, reject) => {
      let arrayLength = this.repos.length;
      this.repos = []
      // for (let i = 0; i < arrayLength; i++) { //removing initial values from repos array before pushing to the array
      //   this.repos.pop()
      // }

      this.http.get<any>(`${environment.Apirepo}${reponame}/repositories`).toPromise().then(response => {
       
        for (let i = 0; i < response.length; i++) {
          let repo = new Repos("", "", "", "", 0, new Date());
          
          repo.name = response[i]["name"]
          repo.description = response[i]["description"]
          repo.language = response[i]["language"]
          repo.html_url = response[i]["html_url"]
          repo.forks = response[i]["forks"]
    
          this.repos.push(repo)
          resolve()
          console.log(repo)
        }
      },
        error => {
          console.log("an error occured")
          reject(error)
        })
    })
    return promise
  }
  // repoByNameRequest(reponame: any) {
  //   interface repoByNameApiResponse {
  //     // total_count:number,
  //     items: []
  //   }
  //   let promise = new Promise<void>((resolve, reject) => {
  //     let arrayLength = this.reposName.length;
  //     for (let i = 0; i < arrayLength; i++) { //removing initial values from array before pushing to the array
  //       this.reposName.pop()
  //     }
  //     this.http.get<repoByNameApiResponse>(`https://api.github.com/search/repositories?q=${reponame}`).toPromise().then(response => {
        // this.numberOfRepos.repoCount =response.total_count
        // console.log("Number of repos",this.numberOfRepos)
        // this.repositories = response.items
  //       for (let i = 0; i < response.items.length; i++) {
  //         let repoByName = new RepoName("", "", "", "", 0, new Date());
  //         repoByName.name = response.items[i]["name"]
  //         repoByName.description = response.items[i]["description"]
  //         repoByName.language = response.items[i]["language"]
  //         repoByName.html_url = response.items[i]["html_url"]
  //         repoByName.forks = response.items[i]["forks"]
  //         repoByName.updated_at = response.items[i]["updated_at"]
  //         this.reposName.push(repoByName)
  //       }
  //       resolve()
  //        console.log(this.reposName)
  //     },
  //       error => {
  //         // this.numberOfRepos.repoCount= 0; 
  //         console.log("an error occured")
  //         reject(error)
  //       })
  //   })
  //   return promise
  // }
  // repoByNameNumberRequest(reponame: any) {
  //   interface repoByNameNumberApiResponse {
  //     total_count: number
  //   }
  //   let promise = new Promise<void>((resolve, reject) => {
  //     this.http.get<repoByNameNumberApiResponse>(`https://api.github.com/search/repositories?q=${reponame}`).toPromise().then(response => {
  //       this.reposNumber.total = response.total_count
  //       console.log("Number of repos", this.reposNumber)
  //       resolve()
  //       console.log("Numbers", this.reposNumber.total)
  //     },
  //       error => {
  //         this.reposNumber.total = 0;
  //         console.log("an error occured")
  //         reject(error)
  //       })
  //   })
  //   return promise
  // }
}
