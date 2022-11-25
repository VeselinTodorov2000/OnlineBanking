import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCreditModalComponent } from './request-credit-modal.component';

describe('RequestCreditModalComponent', () => {
  let component: RequestCreditModalComponent;
  let fixture: ComponentFixture<RequestCreditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCreditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestCreditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
