import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaImageComponentComponent } from './nasa-image-component.component';

describe('NasaImageComponentComponent', () => {
  let component: NasaImageComponentComponent;
  let fixture: ComponentFixture<NasaImageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaImageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
