import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SafesComponent} from './safes.component';

describe('SafesComponent', () => {
  let component: SafesComponent;
  let fixture: ComponentFixture<SafesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
