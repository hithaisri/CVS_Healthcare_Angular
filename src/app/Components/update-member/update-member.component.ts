import { Component, OnInit } from '@angular/core';
import Member from 'src/app/Entity/Member';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  members: Member[] = [];
  member: Member = new Member();
  id: number = 0;

  refresh(){
    window.location.reload();
  }

  updateBook(st, j) {

    console.log(st.id);
    this.member.id = st.id;
    this.member.firstName = st.firstName;
    this.member.lastName = st.lastName;
    this.member.email=st.email;
    this.member.dob = st.dob;
    this.member.address = st.address;
    this.member.state = st.state;
    this.member.city= st.city;

  }

  update(member) {

    console.log(member);
    const observable = this.memberService.updateMember(this.member.id, this.member);
    observable.subscribe(
      (response: any) => {
        console.log(response)
        alert("Book Updated");
      },
      function (error) {
        console.log(error);
        alert("Something went wrong");
      });
      
    window.location.reload()
  }

  constructor(public memberService:MemberService) { }

  ngOnInit(): void {
    const observable = this.memberService.getMembers();
    observable.subscribe((response: any)=>{
      this.members = response as Member[];
    })
  }

}
