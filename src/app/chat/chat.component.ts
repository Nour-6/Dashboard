import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from './web-socket.service';
import { ChatMessageDto } from './chatMessageDto';
import { TokenStorageService } from '../_services/token-storage.service';
import { Employee } from '../user-list/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../user-list/employee.service';
@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
use: string;
public employees: Employee[];

  constructor(public webSocketService: WebSocketService,private tokenStorage: TokenStorageService,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
    this.use = this.tokenStorage.getUser().username;
  
    console.log(name);
    
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
   
    const chatMessageDto = new ChatMessageDto(this.use, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (employee.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1 
      || employee.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.nom.toUpperCase().indexOf(key.toUpperCase()) !== -1
      || employee.prenom.toUpperCase().indexOf(key.toUpperCase()) !== -1  ) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }
  
}
