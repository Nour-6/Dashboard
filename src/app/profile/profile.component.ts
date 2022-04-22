import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  img:String;
  currentUser: any;

  constructor(private token: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.img=this.currentUser.imageUrl;
    console.log(this.currentUser);
    
}

onSubmit(): void {

      this.router.navigate(['/edit-profile']).then(() => {
        window.location.reload();
      });
    }

  
}
