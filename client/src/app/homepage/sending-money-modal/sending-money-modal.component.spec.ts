import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SendingMoneyModalComponent} from './sending-money-modal.component';

describe('SendingMoneyModalComponent', () => {
  let component: SendingMoneyModalComponent;
  let fixture: ComponentFixture<SendingMoneyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendingMoneyModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendingMoneyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
