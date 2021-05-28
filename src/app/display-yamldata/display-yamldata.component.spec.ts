import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayYAMLDataComponent } from './display-yamldata.component';

describe('DisplayYAMLDataComponent', () => {
  let component: DisplayYAMLDataComponent;
  let fixture: ComponentFixture<DisplayYAMLDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayYAMLDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayYAMLDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
