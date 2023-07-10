import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtuManageComponent } from './rtu-manage.component';

describe('RtuManageComponent', () => {
  let component: RtuManageComponent;
  let fixture: ComponentFixture<RtuManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtuManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtuManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
