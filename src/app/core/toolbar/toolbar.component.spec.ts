import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ToolbarComponent} from './toolbar.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MaterialModule} from '@angular/material';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [
        MaterialModule.forRoot(),
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
