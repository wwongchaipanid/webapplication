import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whatis7ttComponent } from './whatis7tt.component';

describe('Whatis7ttComponent', () => {
  let component: Whatis7ttComponent;
  let fixture: ComponentFixture<Whatis7ttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Whatis7ttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whatis7ttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
