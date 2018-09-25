import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespieListComponent } from './respie-list.component';

describe('RespieListComponent', () => {
  let component: RespieListComponent;
  let fixture: ComponentFixture<RespieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
