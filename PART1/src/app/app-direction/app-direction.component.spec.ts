import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDirectionComponent } from './app-direction.component';

describe('AppDirectionComponent', () => {
  let component: AppDirectionComponent;
  let fixture: ComponentFixture<AppDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
