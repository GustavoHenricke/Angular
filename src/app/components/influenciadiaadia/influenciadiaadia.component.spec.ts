import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenciadiaadiaComponent } from './influenciadiaadia.component';

describe('InfluenciadiaadiaComponent', () => {
  let component: InfluenciadiaadiaComponent;
  let fixture: ComponentFixture<InfluenciadiaadiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfluenciadiaadiaComponent]
    });
    fixture = TestBed.createComponent(InfluenciadiaadiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
