import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacaoescolasComponent } from './educacaoescolas.component';

describe('EducacaoescolasComponent', () => {
  let component: EducacaoescolasComponent;
  let fixture: ComponentFixture<EducacaoescolasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducacaoescolasComponent]
    });
    fixture = TestBed.createComponent(EducacaoescolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
