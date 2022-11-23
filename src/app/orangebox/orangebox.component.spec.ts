import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeboxComponent } from './orangebox.component';

describe('OrangeboxComponent', () => {
  let component: OrangeboxComponent;
  let fixture: ComponentFixture<OrangeboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrangeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
