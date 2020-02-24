import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorgageComponent } from './morgage.component';

describe('MorgageComponent', () => {
  let component: MorgageComponent;
  let fixture: ComponentFixture<MorgageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorgageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
