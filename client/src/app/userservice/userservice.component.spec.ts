import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserserviceComponent } from './userservice.component';

describe('UserserviceComponent', () => {
  let component: UserserviceComponent;
  let fixture: ComponentFixture<UserserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
