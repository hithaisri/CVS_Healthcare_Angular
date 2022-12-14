import { Component, OnInit } from '@angular/core';
import Claim from 'src/app/Entity/Claim';
import Member from 'src/app/Entity/Member';
import { ClaimService } from 'src/app/Services/claim.service';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-show-members',
  templateUrl: './show-members.component.html',
  styleUrls: ['./show-members.component.css']
})
export class ShowMembersComponent implements OnInit {

  members: Member[] = [];
  member: Member = new Member();
  claim: Claim = new Claim();
  claims: Claim[] = [];
  
  display = "none";

  contentText= "";
  
  
  openModalNew(content:string) {
    this.contentText=content;
    this.display = "block";
  }
 
  openModal(memberId:number) {
    this.claim.memberId=memberId;
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  refresh(){
    window.location.reload();
  }

  submitClaim(){
    const observable =  this.claimService.submitClaim(this.claim);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        alert(response);
        window.location.reload();
      },
      function(error) {
        console.log(error);
        alert("Something went wrong please try again!")
      }
    )
  }

  showClaims(memberId:number){
    const observable = this.claimService.getClaims(memberId);
    observable.subscribe((response: any)=>{
      this.claims = response as Claim[];
    })
  }

  constructor(public memberService:MemberService,public claimService:ClaimService) { }

  ngOnInit(): void {
    const observable = this.memberService.getMembers();
    observable.subscribe((response: any)=>{
      this.members = response as Member[];
    })
  }

}
