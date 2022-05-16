import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public Done = true;
  public users: any[] = [];
  public perPage = 0;
  public totalPages = 0;
  public totalData = 0;
  public informations: any;
  public pageNumber: Number = 0;
  public pagesArray: any[] = [];
  public selectedUser: any;
  public userId: string = '';

  constructor(
    private userService: UserService,
    private primengConfig: PrimeNGConfig,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.primengConfig.ripple = true;
    this.Done = false;
    await this.prepareData(1);
    this.Done = true;
  }
  prepareData = async (pageNumber: Number) => {
    this.informations = await this.userService.getUsers(pageNumber);
    console.log(this.informations);
    this.perPage = this.informations.per_page;
    this.totalPages = this.informations.total_pages;
    this.totalData = this.totalPages * this.perPage;
    for (let i = 0; i < this.totalPages; i++) {
      this.pagesArray.push(i + 1);
    }
    console.log(this.perPage);
    console.log(this.totalPages);
    this.users = this.informations.data

  }
  onRowSelect(event: any, type: string) {
    let id = '';
    type === 'search' ? id = event.item.id : id = this.selectedUser.id
    console.log(this.selectedUser)
    console.log(event);
    this.router.navigate(['users/user/', id])
  }

  async paginate(event: any) {
    await this.prepareData(event.page + 1);
  }

}
