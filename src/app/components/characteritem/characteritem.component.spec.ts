import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Characteritem } from './characteritem.component';

describe('CharacteritemComponent', () => {
  let component: Characteritem;
  let fixture: ComponentFixture<Characteritem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Characteritem ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Characteritem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
