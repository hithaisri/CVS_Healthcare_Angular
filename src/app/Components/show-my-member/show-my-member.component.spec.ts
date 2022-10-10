import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyMemberComponent } from './show-my-member.component';

describe('ShowMyMemberComponent', () => {
  let component: ShowMyMemberComponent;
  let fixture: ComponentFixture<ShowMyMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
