import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTitleComponent } from './events-title.component';

describe('EventsTitleComponent', () => {
  let component: EventsTitleComponent;
  let fixture: ComponentFixture<EventsTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
