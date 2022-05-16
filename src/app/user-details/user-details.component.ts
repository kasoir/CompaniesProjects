import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public id = 0;
  public user: any;
  public done = true;

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  async ngOnInit() {
    this.done = false;
    this.id = Number(this.router.url.split('/')[3]);
    this.user = (await this.userService.getUserById(this.id)).data
    console.log(this.user)
    this.done = true;
  }

}
