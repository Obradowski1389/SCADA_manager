import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsManageComponent } from './reports-manage.component';

describe('ReportsManageComponent', () => {
  let component: ReportsManageComponent;
  let fixture: ComponentFixture<ReportsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
