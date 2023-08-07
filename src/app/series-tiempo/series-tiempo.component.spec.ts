import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesTiempoComponent } from './series-tiempo.component';

describe('SeriesTiempoComponent', () => {
  let component: SeriesTiempoComponent;
  let fixture: ComponentFixture<SeriesTiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesTiempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
