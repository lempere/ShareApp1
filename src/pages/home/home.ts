import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GithubProvider} from "../../providers/github/github";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: any;
  repos: any;

  constructor(public navCtrl: NavController, private github: GithubProvider) {
  }

  getRepos() {
    if(this.username.length < 4 ) return;
    this.github.getRepos(this.username)
      .subscribe( data => this.repos = data);
  }

  goToDetails(repo: any) {
    console.log('Go to detail ', repo)
  }
}
