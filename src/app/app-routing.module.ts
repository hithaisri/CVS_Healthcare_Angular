import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './Components/add-member/add-member.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { SearchMemberComponent } from './Components/search-member/search-member.component';
import { ShowClaimsComponent } from './Components/show-claims/show-claims.component';
import { ShowMembersComponent } from './Components/show-members/show-members.component';
import { ShowMyMemberComponent } from './Components/show-my-member/show-my-member.component';
import { SignupComponent } from './Components/signup/signup.component';
import { UpdateMemberComponent } from './Components/update-member/update-member.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'header',component:HeaderComponent},
{path:'addMember',component:AddMemberComponent},
{path:'searchMember',component:SearchMemberComponent},
{path:'showMembers',component:ShowMembersComponent},
{path:'myMember',component:ShowMyMemberComponent},
{path:'myClaims',component:ShowClaimsComponent},
{path:'updateMember',component:UpdateMemberComponent},
{path:'signup',component:SignupComponent},
{path:'logout',component:LogoutComponent},
{path:'',redirectTo:'/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
