import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildInPipes } from './built-in-pipes';

describe('BuildInPipes', () => {
  let component: BuildInPipes;
  let fixture: ComponentFixture<BuildInPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildInPipes],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildInPipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
