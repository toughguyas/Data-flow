import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfAppComponent } from './child-of-app.component';

describe('ChildOfAppComponent', () => {
  let component: ChildOfAppComponent;
  let fixture: ComponentFixture<ChildOfAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOfAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildOfAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
