import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandartHeaderComponent } from './standart-header.component';

describe('StandartHeaderComponent', () => {
  let component: StandartHeaderComponent;
  let fixture: ComponentFixture<StandartHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandartHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandartHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
