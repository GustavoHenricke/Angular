import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandesnomesComponent } from './grandesnomes.component';

describe('GrandesnomesComponent', () => {
  let component: GrandesnomesComponent;
  let fixture: ComponentFixture<GrandesnomesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandesnomesComponent]
    });
    fixture = TestBed.createComponent(GrandesnomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
