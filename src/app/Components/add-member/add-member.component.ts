import { Component, OnInit } from '@angular/core';
import Member from 'src/app/Entity/Member';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  member : Member=new Member();

  save() {
    const observable = this.memberService.saveMember(this.member);
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
  constructor(public memberService:MemberService) { }

  ngOnInit(): void {
  }

}
