import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClaimsComponent } from './show-claims.component';

describe('ShowClaimsComponent', () => {
  let component: ShowClaimsComponent;
  let fixture: ComponentFixture<ShowClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowClaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
