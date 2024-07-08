import {Component, output} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatFormField, MatPrefix} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {RepaymentPeriodService} from "../../services/repayment-period.service";
import {SelectValue} from "../../Models/selectValue";
import {Observable} from "rxjs";
import {MatOption, MatSelect} from "@angular/material/select";
import {AsyncPipe} from "@angular/common";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatButton} from "@angular/material/button";
import {MortgageResult} from "../../Models/mortgageResult";

@Component({
  selector: 'lendwell-mortgage-form',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    MatIcon,
    MatIconModule,
    MatFormField,
    MatInput,
    MatPrefix,
    MatInputModule,
    MatSelect,
    AsyncPipe,
    MatOption,
    MatRadioGroup,
    MatRadioButton,
    MatButton
  ],
  templateUrl: './mortgage-form.component.html',
  styleUrl: './mortgage-form.component.scss'
})
export class MortgageFormComponent {
  mortgageForm!: FormGroup;
  repaymentPeriods$: Observable<SelectValue[]>;

  onFormSubmitted = output<MortgageResult>();


  private setMortgageForm() {
    this.mortgageForm = this.formBuilder.group({
      loanAmount: [null, [Validators.required, Validators.min(100000)]],
      repaymentPeriod: [null, [Validators.required]],
      depositAmount: [null, [Validators.required, Validators.min(1)]],
      propertyPrice: [null, [Validators.required, Validators.min(1)]],
      totalIncome: [null, [Validators.required, Validators.min(1)]],
      additionalFunding: [null]
    });
  }

  constructor(private formBuilder: FormBuilder, private repaymentPeriodService: RepaymentPeriodService) {
    this.setMortgageForm();
    this.repaymentPeriods$ = this.repaymentPeriodService.getRepaymentPeriods();
  }

  Validate() {
    if(this.mortgageForm.valid) {
      let result = {
        amount: this.mortgageForm.get('loanAmount')?.value ?? 0,
        years: this.mortgageForm.get('repaymentPeriod')?.value ?? 0,
        interest: 2.5,
        times: 12
      }
      this.onFormSubmitted.emit(result);
    }
  }
}
