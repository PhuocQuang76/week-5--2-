import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresssBookComponent } from './address-book.component';

describe('AddresssBookComponent', () => {
  let component: AddresssBookComponent;
  let fixture: ComponentFixture<AddresssBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresssBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresssBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
