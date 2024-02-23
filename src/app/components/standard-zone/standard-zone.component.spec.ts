import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardZoneComponent } from './standard-zone.component';

describe('StandardZoneComponent', () => {
  let component: StandardZoneComponent;
  let fixture: ComponentFixture<StandardZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandardZoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
