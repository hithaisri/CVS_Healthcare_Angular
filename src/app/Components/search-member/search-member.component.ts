import { Component, OnInit } from '@angular/core';
import Claim from 'src/app/Entity/Claim';
import Member from 'src/app/Entity/Member';
import SearchMember from 'src/app/Entity/SeachMember';
import { ClaimService } from 'src/app/Services/claim.service';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-search-member',
  templateUrl: './search-member.component.html',
  styleUrls: ['./search-member.component.css']
})
export class SearchMemberComponent implements OnInit {

  searchMember: SearchMember=new SearchMember();

  display = "none";

  member: Member = new Member();

  claim : Claim =new Claim();

  members: Member[]=[];
  
  onCloseHandled() {
    this.display = "none";
  }

  openModalNew(memberId:number) {
    this.claim.memberId=memberId;
    this.display = "block";
  }

  searchMembers(){
    const observable = this.memberService.searchMembers(this.searchMember);
    observable.subscribe((response: any)=>{
      this.members.splice(0);
      console.log(response);
      this.members = response as Member[];
    })
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
  constructor(public claimService:ClaimService,public memberService:MemberService) { }

  ngOnInit(): void {
  }

}
