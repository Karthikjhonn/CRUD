import { Component, Input ,Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HostservicesService } from '../hostservices.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private router: Router, private service: HostservicesService, private activeRoute: ActivatedRoute) {
    if (router.url == "/adduser") {
      this.title = "CRUD"
      this.btnTitle = 'add user'
    } else if (router.url.split("/")[1] == "editUser") {
      this.title = "EDIT USER"
      this.btnTitle = 'update user'
    }
    this.userId = this.activeRoute.snapshot.paramMap.get('id')
    service.getUserId(this.userId)
  }

  // ngOnChange(){console.log("onchange");}
  // ngDoCheck(){console.log("docheck");}
  ngAfterContentInit(){
    this.editUser(this.userId)
}
//   ngAfterContentChecked(){
//     console.log("contentcheck")
// }
  // ngAfterViewInit(){console.log("view")}
  // ngAfterViewChecked(){console.log("viewcheck")}
  // ngOnDestroy(){console.log("destroy")}  


  title = "CRUD"
  btnTitle = 'Add User'
  userId !: any
  singleUser: any

  // Reactive Module Form
  addUser = new FormGroup({
    userName: new FormControl("", Validators.required),
    mobileNumber: new FormControl("", Validators.pattern("[0-9]{10}")),
    accept: new FormControl("", Validators.required)
  });
  
  submit(){
    this.singleUser = this.addUser.value
    this.addUser = new FormGroup({
      'userName': new FormControl("",),
      'mobileNumber': new FormControl("",),
      'accept': new FormControl("")
    });
    this.router.navigate(["/user"]);
    this.service.addUser(this.singleUser,this.userId)

  }

  editUser(id: any) {
    this.service.editUser(id)
    this.addUser = new FormGroup({
      userName: new FormControl(this.service.updateUserName.userName, Validators.required),
      mobileNumber: new FormControl(this.service.updateUserName.mobileNumber, Validators.pattern("[0-9]{10}")),
      accept: new FormControl("", Validators.required)
    });
  }




}


