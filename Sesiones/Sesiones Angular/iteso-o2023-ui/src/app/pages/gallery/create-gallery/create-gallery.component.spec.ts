import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGalleryComponent } from './create-gallery.component';

describe('CreateGalleryComponent', () => {
  let component: CreateGalleryComponent;
  let fixture: ComponentFixture<CreateGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGalleryComponent]
    });
    fixture = TestBed.createComponent(CreateGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
