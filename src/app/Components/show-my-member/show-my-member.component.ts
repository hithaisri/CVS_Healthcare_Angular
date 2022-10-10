import { Component, OnInit } from '@angular/core';
import Claim from 'src/app/Entity/Claim';
import Member from 'src/app/Entity/Member';
import { ClaimService } from 'src/app/Services/claim.service';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-show-my-member',
  templateUrl: './show-my-member.component.html',
  styleUrls: ['./show-my-member.component.css']
})
export class ShowMyMemberComponent implements OnInit {

  members: Member[]=[];

  display = "none";

  member:Member=new Member();

  claim : Claim=new Claim();


  onCloseHandled() {
    this.display = "none";
  }

  
  openModalNew(memberId:number) {
    this.claim.memberId=memberId;
    this.display = "block";
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

  constructor(public memberService:MemberService,public claimService:ClaimService) { }

  ngOnInit(): void {
    let memberId= sessionStorage.getItem('memberId');
    const observable = this.memberService.getMemberById(parseInt(memberId));
    observable.subscribe((response: any)=>{
      this.member = response as Member;
      this.members.push(this.member);
    })
  }

}
