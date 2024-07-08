import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageResultComponent } from './mortgage-result.component';

describe('MortageResultComponent', () => {
  let component: MortgageResultComponent;
  let fixture: ComponentFixture<MortgageResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MortgageResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortgageResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have blurred data', () => {
    fixture.componentRef.setInput('dataBlurred', true);
    fixture.detectChanges();
    let el = fixture.debugElement.nativeElement.querySelector('.mortgage-result-details-card-value-blurred');
    expect(el).toBeTruthy();
  });

  it('should not have blurred data', () => {
    fixture.componentRef.setInput('dataBlurred', false);
    fixture.detectChanges();
    fixture.checkNoChanges();
    fixture.componentRef.changeDetectorRef.detectChanges();
    let el = fixture.debugElement.nativeElement.querySelector('.mortgage-result-details-card-value-blurred');
    expect(el).toBeFalsy();
  });
});
