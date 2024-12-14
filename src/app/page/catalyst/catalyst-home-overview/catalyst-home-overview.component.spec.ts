import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalystHomeOverviewComponent } from './catalyst-home-overview.component';

describe('CatalystHomeOverviewComponent', () => {
  let component: CatalystHomeOverviewComponent;
  let fixture: ComponentFixture<CatalystHomeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalystHomeOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalystHomeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
