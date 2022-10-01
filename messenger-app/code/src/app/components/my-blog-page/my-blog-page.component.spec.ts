import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBlogPageComponent } from './my-blog-page.component';

describe('MyBlogPageComponent', () => {
  let component: MyBlogPageComponent;
  let fixture: ComponentFixture<MyBlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBlogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
