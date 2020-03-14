import { ListDepotComponent } from './components/list-depot/list-depot.component';
import { AddDepotComponent } from './components/add-depot/add-depot.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RoleComponent } from './components/role/role.component';
import { ListCompteComponent } from './components/list-compte/list-compte.component';
import { CompteComponent } from './components/compte/compte.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'utilisateur', component: UtilisateurComponent },
    {path:'addUser',component:AddUserComponent},
    {path:'list-compte',component:ListCompteComponent},
    {path:'add-compte',component:CompteComponent},
    {path:'add-depot',component:AddDepotComponent},
    {path:'list-depot',component:ListDepotComponent},
    {path:'role',component:RoleComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);