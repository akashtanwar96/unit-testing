import { BrowserModule, By } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let com: AppComponent;
  let fix: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() =>  {
      fix = TestBed.createComponent(AppComponent);
      com = fix.componentInstance;
      de = fix.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));


  it(`should have text'contact page'`, async(() => {
expect(com.text).toEqual('contact page');
  }));

  it(`should set submitted to true`, async(() => {
    expect(com.submitted).toBeFalsy();
      }));

  it(`should call onsubmit`, async(() => {
    fix.detectChanges();
    spyOn(com, 'onSubmit');
    el = fix.debugElement.query(By.css('button')).nativeElement;
    expect(com.onSubmit).toHaveBeenCalledTimes(0);
      }));


  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'angular-unit-testing'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('angular-unit-testing');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-unit-testing!');
  // });

});
