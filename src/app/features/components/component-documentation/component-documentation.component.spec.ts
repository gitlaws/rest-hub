import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDocumentationComponent } from './component-documentation.component';

describe('ComponentDocumentationComponent', () => {
  let component: ComponentDocumentationComponent;
  let fixture: ComponentFixture<ComponentDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDocumentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
