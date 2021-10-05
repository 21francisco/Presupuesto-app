import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeberoComponent } from './cabebero.component';

describe('CabeberoComponent', () => {
  let component: CabeberoComponent;
  let fixture: ComponentFixture<CabeberoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeberoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeberoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
