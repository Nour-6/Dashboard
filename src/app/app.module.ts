import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { RouterModule } from '@angular/router';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GererCandidatureComponent } from './gerer-candidature/gerer-candidature.component';
import { PostulerCandidatureComponent } from './postuler-candidature/postuler-candidature.component';
import { ChatComponent } from './chat/chat.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GererReclamationComponent } from './gerer-reclamation/gerer-reclamation.component';
import { PostulerReclamationComponent } from './postuler-reclamation/postuler-reclamation.component';
import { GererActualiteComponent } from './gerer-actualite/gerer-actualite.component';
import { GererEvenementComponent } from './gerer-evenement/gerer-evenement.component';
import { UserListComponent } from './user-list/user-list.component';
import { GererOffreComponent } from './gerer-offre/gerer-offre.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    SidebarComponent,
    GererCandidatureComponent,
    PostulerCandidatureComponent,
    ChatComponent,
    EditProfileComponent,
    GererReclamationComponent,
    PostulerReclamationComponent,
    GererActualiteComponent,
    GererEvenementComponent,
    UserListComponent,
    GererOffreComponent

  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
