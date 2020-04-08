import { TransactionComponent } from './components/transaction/transaction.component';
import { AffectationComponent } from './components/affectation/affectation.component';
import { ListAffectationComponent } from './components/list-affectation/list-affectation.component';
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
import { ListTransactionComponent } from './components/list-transaction/list-transaction.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'utilisateur', component: UtilisateurComponent, canActivate: [AuthGuard] },
    {path:'addUser',component:AddUserComponent, canActivate: [AuthGuard]},
    {path:'list-compte',component:ListCompteComponent, canActivate: [AuthGuard]},
    {path:'add-compte',component:CompteComponent, canActivate: [AuthGuard]},
    {path:'add-depot',component:AddDepotComponent, canActivate: [AuthGuard]},
    {path:'list-depot',component:ListDepotComponent, canActivate: [AuthGuard]},
    {path:'list-affectation',component:ListAffectationComponent, canActivate: [AuthGuard]},
    {path:'add-affectation',component:AffectationComponent, canActivate: [AuthGuard]},
    {path:'add-transaction',component:TransactionComponent, canActivate: [AuthGuard]},
    {path:'list-transaction',component:ListTransactionComponent, canActivate: [AuthGuard]},
    {path:'role',component:RoleComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
    
];

export const appRoutingModule = RouterModule.forRoot(routes);