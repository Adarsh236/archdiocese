import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FirstTaskComponent } from './first-task.component';

describe('FirstTaskComponent', () => {
  let component: FirstTaskComponent;
  let fixture: ComponentFixture<FirstTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
