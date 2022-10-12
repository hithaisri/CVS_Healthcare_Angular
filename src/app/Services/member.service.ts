import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Member from '../Entity/Member';
import SeachMember from '../Entity/SeachMember';

const BASE_URL = 'http://localhost:8081';

@Injectable({
  providedIn: 'root'
})


export class MemberService {
  
  paramUrl: string = "";

  searchMembers(searchMember: SeachMember) {

    if (typeof searchMember.firstName === "string" && searchMember.firstName.trim().length != 0 
    && typeof searchMember.lastName === "string" && searchMember.lastName.trim().length != 0) 
      this.paramUrl = "/member/search?firstName=" + searchMember.firstName.trim()+"&lastName="+searchMember.lastName.trim();
    else if (typeof searchMember.physicianName === "string" && searchMember.physicianName.trim().length != 0)
      this.paramUrl = "/member/search?physicianName=" + searchMember.physicianName.trim();
    else if (searchMember.memberId > 0)
      this.paramUrl = "/member/search?memberId=" + searchMember.memberId;
    else if (searchMember.claimId > 0)
      this.paramUrl = "/member/search?claimId=" + searchMember.claimId;

      return this.http.get(BASE_URL + this.paramUrl);
  }
 
  updateMember(id: number, member: Member) {
    return this.http.put(BASE_URL+"/member/updateMember/"+id, member, { responseType: "text" });
  }

  saveMember(member: {
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    dob:Date;
    address:string;
    state:string;
    city:string;
  }) {
    return this.http.post(BASE_URL + "/member/save", member, { responseType: "text" });
  }

  getMembers() {
    return this.http.get(BASE_URL + "/member/getMembers");
  }

  getMemberById(memberId:number) {
    return this.http.get(BASE_URL + "/member/getMember/"+memberId);
  }

  constructor(public http: HttpClient) { }
}
