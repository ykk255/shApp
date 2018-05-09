import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormsMainComponent } from './basic-forms-main.component';

describe('BasicFormsMainComponent', () => {
  let component: BasicFormsMainComponent;
  let fixture: ComponentFixture<BasicFormsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFormsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
