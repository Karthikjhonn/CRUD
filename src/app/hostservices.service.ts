import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostservicesService {

  constructor() {
    // this.deleteUser(1)

  }
  userId: any
  user: any = [
    { "userName": "Harish", "mobileNumber": 8234567890, "accept": true },
    { "userName": "Raja", "mobileNumber": 9876543210, "accept": true },
    { "userName": "Tamil", "mobileNumber": 741859612, "accept": true },
    { "userName": "lokesh", "mobileNumber": 789687512, "accept": true },
  ]
  updateUserName: any
  // addUser
  addUser(userdetails: any, id: any) {
    this.user.filter((data: any, i: any) => {
      if (i == id - 1) {
        this.user[id - 1] = userdetails
      }
    })
    if (!id) {
      this.user.push(userdetails)
    }
  }
  // delete user
  deleteUser(id: any) {
    this.user = this.user.filter((data: any, index: any) => {
      if (index != id) {
        return data
      }
    })
  }

  getUserId(id: any) {
    this.userId = id
  }

  editUser(id: any) {
    this.updateUserName = this.user[id - 1]
  }




}
