import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AddDepotComponent } from './components/add-depot/add-depot.component';
import { ListCompteComponent } from './components/list-compte/list-compte.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RoleComponent } from './components/role/role.component';
import { CompteComponent } from './components/compte/compte.component';;
import { ListDepotComponent } from './components/list-depot/list-depot.component'


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        UtilisateurComponent
,
        AddDepotComponent ,
        ListCompteComponent ,
        AddUserComponent ,
        RoleComponent ,
        CompteComponent,
        ListDepotComponent],
        
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }