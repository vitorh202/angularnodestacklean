import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingtestComponent } from './databindingtest.component';

describe('DatabindingtestComponent', () => {
  let component: DatabindingtestComponent;
  let fixture: ComponentFixture<DatabindingtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabindingtestComponent]
    });
    fixture = TestBed.createComponent(DatabindingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
