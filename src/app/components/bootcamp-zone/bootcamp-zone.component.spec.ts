import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampZoneComponent } from './bootcamp-zone.component';

describe('BootcampZoneComponent', () => {
  let component: BootcampZoneComponent;
  let fixture: ComponentFixture<BootcampZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BootcampZoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootcampZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
