import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnologyPage } from './add-technology.page';

describe('AddTechnologyPage', () => {
  let component: AddTechnologyPage;
  let fixture: ComponentFixture<AddTechnologyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTechnologyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTechnologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
