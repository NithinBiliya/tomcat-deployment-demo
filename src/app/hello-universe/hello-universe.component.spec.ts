import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloUniverseComponent } from './hello-universe.component';

describe('HelloUniverseComponent', () => {
  let component: HelloUniverseComponent;
  let fixture: ComponentFixture<HelloUniverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloUniverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
