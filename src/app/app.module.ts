import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMemberComponent } from './Components/add-member/add-member.component';
import { ShowMembersComponent } from './Components/show-members/show-members.component';
import { HeaderComponent } from './Components/header/header.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { UpdateMemberComponent } from './Components/update-member/update-member.component';
import { SearchMemberComponent } from './Components/search-member/search-member.component';
import { HttpClientModule } from '@angular/common/http';
import { EllipsisPipe } from './Services/ellipsis.pipe';
import { SignupComponent } from './Components/signup/signup.component';
import { ShowMyMemberComponent } from './Components/show-my-member/show-my-member.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowClaimsComponent } from './Components/show-claims/show-claims.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMemberComponent,
    ShowMembersComponent,
    HeaderComponent,
    LogoutComponent,
    UpdateMemberComponent,
    SearchMemberComponent, 
    EllipsisPipe, 
    SignupComponent, 
    ShowMyMemberComponent, 
    HomeComponent, ShowClaimsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
