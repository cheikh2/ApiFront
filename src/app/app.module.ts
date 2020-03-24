import { LoginGuard } from './guard/login.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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
import { CompteComponent } from './components/compte/compte.component';
import { ListDepotComponent } from './components/list-depot/list-depot.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './components/search/search.component'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        NgxPaginationModule,
        Ng2SearchPipeModule
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
        ListDepotComponent,
        SearchComponent  
    
    ],
        
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        LoginGuard


    ],
    bootstrap: [AppComponent]
})
export class AppModule { }