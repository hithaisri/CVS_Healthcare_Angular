import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMemberComponent } from './Components/add-member/add-member.component';
import { ShowMembersComponent } from './Components/show-members/show-members.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { UpdateMemberComponent } from './Components/update-member/update-member.component';
import { SearchMemberComponent } from './Components/search-member/search-member.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMemberComponent,
    ShowMembersComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    UpdateMemberComponent,
    SearchMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
