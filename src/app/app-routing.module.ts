import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GererCandidatureComponent } from './gerer-candidature/gerer-candidature.component';
import { PostulerCandidatureComponent } from './postuler-candidature/postuler-candidature.component';
import { ChatComponent } from './chat/chat.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PostulerReclamationComponent } from './postuler-reclamation/postuler-reclamation.component';
import { GererReclamationComponent } from './gerer-reclamation/gerer-reclamation.component';
import { GererActualiteComponent } from './gerer-actualite/gerer-actualite.component';
import { GererEvenementComponent } from './gerer-evenement/gerer-evenement.component';
import { UserListComponent } from './user-list/user-list.component';
import { GererOffreComponent } from './gerer-offre/gerer-offre.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'employees', component: UserListComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'gerer-candidature', component: GererCandidatureComponent },
  { path: 'postuler-candidature', component: PostulerCandidatureComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'postuler-reclamation', component: PostulerReclamationComponent },
  { path: 'gerer-reclamation', component: GererReclamationComponent },
  { path: 'gerer-actualite', component: GererActualiteComponent },
  { path: 'gerer-evenement', component: GererEvenementComponent },
  { path: 'gerer-offre', component: GererOffreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
