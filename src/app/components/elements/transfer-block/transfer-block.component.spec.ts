import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBlockComponent } from './transfer-block.component';

describe('TransferBlockComponent', () => {
  let component: TransferBlockComponent;
  let fixture: ComponentFixture<TransferBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
