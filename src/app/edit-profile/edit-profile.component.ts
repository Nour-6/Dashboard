import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../user-list/employee.service';
import { Employee } from '../user-list/employee';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user:any;
  public isUpdated = false;
  use:String;
  constructor( private tokenStorage: TokenStorageService,private employeeService: EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
  }
  public onUpdateProfile(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        this.isUpdated =true;
        this.tokenStorage.saveUser(employee);
        console.log(response); 
        var use = document.getElementById('use');
        use.innerHTML  = employee.username;
        
        
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
