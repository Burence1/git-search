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
  username:string

  constructor(private http: HttpClient) {
    this.user = new Users("", "", "", "", 0, 0, 0, new Date(), "", "");
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

  userRepoRequest(username: any) {
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
      this.http.get<userApiResponse>(`${environment.ApiKey}?portfolio`).toPromise().then(response => {
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
}
