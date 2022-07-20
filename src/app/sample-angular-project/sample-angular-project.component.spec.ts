import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleAngularProjectComponent } from './sample-angular-project.component';

describe('SampleAngularProjectComponent', () => {
  let component: SampleAngularProjectComponent;
  let fixture: ComponentFixture<SampleAngularProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleAngularProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleAngularProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
