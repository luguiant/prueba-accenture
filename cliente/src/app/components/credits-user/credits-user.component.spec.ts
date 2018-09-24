import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsUserComponent } from './credits-user.component';

describe('CreditsUserComponent', () => {
  let component: CreditsUserComponent;
  let fixture: ComponentFixture<CreditsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
