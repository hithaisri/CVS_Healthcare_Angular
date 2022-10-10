import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Member from '../Entity/Member';

const BASE_URL = 'http://localhost:8081';

@Injectable({
  providedIn: 'root'
})


export class MemberService {
 
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
