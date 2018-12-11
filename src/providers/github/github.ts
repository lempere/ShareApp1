import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GithubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubProvider {

  constructor(public http: HttpClient) {
  }

  getRepos(username) {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }

  getDetails(repo) {
    return this.http.get(`${repo.url}/readme`, {
      headers:
        {'Accept': 'application/vnd.github.VERSION.html'}
    });
  }
}
