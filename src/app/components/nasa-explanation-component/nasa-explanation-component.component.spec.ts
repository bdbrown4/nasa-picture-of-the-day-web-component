import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaExplanationComponentComponent } from './nasa-explanation-component.component';

describe('NasaExplanationComponentComponent', () => {
  let component: NasaExplanationComponentComponent;
  let fixture: ComponentFixture<NasaExplanationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaExplanationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaExplanationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
