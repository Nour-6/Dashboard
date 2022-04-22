import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../gerer-reclamation/reclamation';
import { ReclamationService } from './reclamationservice';
import { TokenStorageService } from '../_services/token-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-postuler-reclamation',
  templateUrl: './postuler-reclamation.component.html',
  styleUrls: ['./postuler-reclamation.component.css']
})
export class PostulerReclamationComponent implements OnInit {

  constructor(private reclamationService: ReclamationService,private router:Router) { }

  ngOnInit(): void {
  }

  public onAddReclamation(addFor: NgForm): void {
   
    this.reclamationService.addReclamation(addFor.value).subscribe(
      (response: Reclamation) => {
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
       
        addFor.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addFor.reset();
      }
    );
    }
}
