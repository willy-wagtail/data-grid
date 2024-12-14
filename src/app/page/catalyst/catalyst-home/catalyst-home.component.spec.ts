import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalystHomeComponent } from './catalyst-home.component';

describe('CatalystHomeComponent', () => {
  let component: CatalystHomeComponent;
  let fixture: ComponentFixture<CatalystHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalystHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalystHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
