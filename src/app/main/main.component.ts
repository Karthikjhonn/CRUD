import { Component, Input,Output } from '@angular/core';
import { HostservicesService } from '../hostservices.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private services:HostservicesService,private route:Router,private activerout:ActivatedRoute){}
  user:any


  ngDoCheck(){
    this.user=this.services.user
  }

  addUser(){
    this.route.navigate(["/adduser"])
  }

  deleteUser(id:number){
    this.services.deleteUser(id)
  }

  editUser(){
    // console.log("edit");
  }

}
