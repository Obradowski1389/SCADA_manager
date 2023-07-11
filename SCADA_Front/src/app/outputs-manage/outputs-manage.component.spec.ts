import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputsManageComponent } from './outputs-manage.component';

describe('OutputsManageComponent', () => {
  let component: OutputsManageComponent;
  let fixture: ComponentFixture<OutputsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputsManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
