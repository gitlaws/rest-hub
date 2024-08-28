import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickfeedComponent } from './quickfeed.component';

describe('QuickfeedComponent', () => {
  let component: QuickfeedComponent;
  let fixture: ComponentFixture<QuickfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickfeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
