import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Claim from '../Entity/Claim';

const BASE_URL = 'http://localhost:8082';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  getClaims(memberId:number) {
    return this.http.get(BASE_URL + "/claim/getClaimsForMember/"+memberId);
  }

  submitClaim(claim: Claim) {
    return this.http.post(BASE_URL + "/claim/submit", claim, { responseType: "text" });
  }

  constructor(public http:HttpClient) { }
}
