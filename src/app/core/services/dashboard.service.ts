import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_BASEURL } from 'src/app/core/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _httpClient: HttpClient) { }

  getUserList() {
    return this._httpClient.get(`${API_BASEURL}users`);
  }

  getTaskList(userId:string){
    return this._httpClient.get(`${API_BASEURL}users/${userId}/todos`);
  }

}
