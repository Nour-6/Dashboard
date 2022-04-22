import { Component, OnInit } from '@angular/core';
import { Candidature } from '../gerer-candidature/candidature';
import { CandidatureService } from '../gerer-candidature/candidature.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-postuler-candidature',
  templateUrl: './postuler-candidature.component.html',
  styleUrls: ['./postuler-candidature.component.css']
})
export class PostulerCandidatureComponent implements OnInit {

  constructor(private candidatureService: CandidatureService,private router:Router) { }

  ngOnInit(): void {
  }

  public onAddCandidature(addForm: NgForm): void {
   
    this.candidatureService.addCandidature(addForm.value).subscribe(
      (response: Candidature) => {
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
       
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
    }
}
