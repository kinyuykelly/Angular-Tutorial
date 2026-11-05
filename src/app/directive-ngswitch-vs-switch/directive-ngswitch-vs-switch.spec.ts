import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectiveNgswitchVsSwitch } from './directive-ngswitch-vs-switch';

describe('DirectiveNgswitchVsSwitch', () => {
  let component: DirectiveNgswitchVsSwitch;
  let fixture: ComponentFixture<DirectiveNgswitchVsSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveNgswitchVsSwitch],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectiveNgswitchVsSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
