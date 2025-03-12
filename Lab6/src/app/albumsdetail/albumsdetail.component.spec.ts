import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsdetailComponent } from './albumsdetail.component';

describe('AlbumsdetailComponent', () => {
  let component: AlbumsdetailComponent;
  let fixture: ComponentFixture<AlbumsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumsdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
