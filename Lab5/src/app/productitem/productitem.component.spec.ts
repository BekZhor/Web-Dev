import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductitemComponent } from './productitem.component';

describe('ProductitemComponent', () => {
  let component: ProductitemComponent;
  let fixture: ComponentFixture<ProductitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
