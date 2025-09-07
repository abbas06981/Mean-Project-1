import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetilComponent } from './product-detil.component';

describe('ProductDetilComponent', () => {
  let component: ProductDetilComponent;
  let fixture: ComponentFixture<ProductDetilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
