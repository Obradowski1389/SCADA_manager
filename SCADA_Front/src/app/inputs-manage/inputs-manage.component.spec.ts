import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsManageComponent } from './inputs-manage.component';

describe('InputsManageComponent', () => {
  let component: InputsManageComponent;
  let fixture: ComponentFixture<InputsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
