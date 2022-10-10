import { Component, OnInit } from '@angular/core';
import Claim from 'src/app/Entity/Claim';
import { ClaimService } from 'src/app/Services/claim.service';

@Component({
  selector: 'app-show-claims',
  templateUrl: './show-claims.component.html',
  styleUrls: ['./show-claims.component.css']
})
export class ShowClaimsComponent implements OnInit {

  claims: Claim[]=[];

  display = "none";

  contentText= "";

  openModal(content:string) {
    this.contentText=content;
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }


  constructor(public claimService:ClaimService) { }
  
  ngOnInit(): void {
    let memberId=sessionStorage.getItem('memberId');
    const observable = this.claimService.getClaims(parseInt(memberId));
    observable.subscribe((response: any)=>{
      this.claims = response as Claim[];
      
    })
  }

}
