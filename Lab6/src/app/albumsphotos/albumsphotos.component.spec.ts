import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsphotosComponent } from './albumsphotos.component';

describe('AlbumsphotosComponent', () => {
  let component: AlbumsphotosComponent;
  let fixture: ComponentFixture<AlbumsphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumsphotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumsphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
