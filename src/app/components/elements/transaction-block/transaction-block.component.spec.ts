import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBlockComponent } from './transaction-block.component';

describe('TransactionBlockComponent', () => {
  let component: TransactionBlockComponent;
  let fixture: ComponentFixture<TransactionBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
