import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBManagerComponent } from './dbmanager.component';

describe('DBManagerComponent', () => {
  let component: DBManagerComponent;
  let fixture: ComponentFixture<DBManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DBManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
