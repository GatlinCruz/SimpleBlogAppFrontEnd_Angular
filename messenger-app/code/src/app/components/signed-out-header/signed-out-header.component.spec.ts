import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedOutHeaderComponent } from './signed-out-header.component';

describe('SignedOutHeaderComponent', () => {
  let component: SignedOutHeaderComponent;
  let fixture: ComponentFixture<SignedOutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignedOutHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedOutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
