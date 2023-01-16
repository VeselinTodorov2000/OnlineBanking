import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateSafeModalComponent} from './create-safe-modal.component';

describe('CreateSafeModalComponent', () => {
  let component: CreateSafeModalComponent;
  let fixture: ComponentFixture<CreateSafeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSafeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSafeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
