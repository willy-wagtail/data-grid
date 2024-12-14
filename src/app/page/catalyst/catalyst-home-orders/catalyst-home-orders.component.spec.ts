import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalystHomeOrdersComponent } from './catalyst-home-orders.component';

describe('CatalystHomeOrdersComponent', () => {
  let component: CatalystHomeOrdersComponent;
  let fixture: ComponentFixture<CatalystHomeOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalystHomeOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalystHomeOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
