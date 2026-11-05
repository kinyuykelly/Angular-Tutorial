import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectiveNgforVsFor } from './directive-ngfor-vs-for';

describe('DirectiveNgforVsFor', () => {
  let component: DirectiveNgforVsFor;
  let fixture: ComponentFixture<DirectiveNgforVsFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveNgforVsFor],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectiveNgforVsFor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
