import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  userList: any = [];
  userListcopy: any  = [];
  searchText = '';
  page = 1;
  perPage = 10;

  constructor(
    private _dashboardService: DashboardService
    ) { }

  ngOnInit() {
    this.getUserListDetails();
  }

  getUserListDetails(){
    this._dashboardService.getUserList().subscribe(res =>{
      this.userList = res;
      this.userListcopy = JSON.parse(JSON.stringify(this.userList));
    })
  }

  taskList(id: any){}

  searchFromList(){
    this.userList  = this.userListcopy.filter((user: { name: string; }) => user.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  pageViewChange(){
    // perPage
  }

}
