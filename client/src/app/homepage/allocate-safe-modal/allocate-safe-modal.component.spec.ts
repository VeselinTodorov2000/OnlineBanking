import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AllocateSafeModalComponent} from './allocate-safe-modal.component';

describe('AllocateSafeModalComponent', () => {
  let component: AllocateSafeModalComponent;
  let fixture: ComponentFixture<AllocateSafeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocateSafeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocateSafeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
