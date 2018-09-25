import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespieDetailComponent } from './respie-detail.component';

describe('RespieDetailComponent', () => {
  let component: RespieDetailComponent;
  let fixture: ComponentFixture<RespieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
