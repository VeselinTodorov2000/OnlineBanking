import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OpenSafeModalComponent} from './open-safe-modal.component';

describe('OpenSafeModalComponent', () => {
  let component: OpenSafeModalComponent;
  let fixture: ComponentFixture<OpenSafeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSafeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenSafeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
