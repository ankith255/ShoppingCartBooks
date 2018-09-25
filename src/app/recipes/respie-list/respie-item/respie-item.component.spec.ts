import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespieItemComponent } from './respie-item.component';

describe('RespieItemComponent', () => {
  let component: RespieItemComponent;
  let fixture: ComponentFixture<RespieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
