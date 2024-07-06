import {Component} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatFormField, MatPrefix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

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
    MatPrefix
  ],
  templateUrl: './mortgage-form.component.html',
  styleUrl: './mortgage-form.component.scss'
})
export class MortgageFormComponent {
  mortgageForm!: FormGroup;


  private setMortgageForm() {
    this.mortgageForm = this.formBuilder.group({
      loanAmount: ['', Validators.required, Validators.min(100000)],
      repaymentPeriod: ['', Validators.required],
      depositAmount: ['', [Validators.required, Validators.min(1)]],
      propertyPrice: ['', [Validators.required, Validators.min(1)]],
      totalIncome: ['', [Validators.required, Validators.min(1)]],
      additionalFunding: ['']
    });
  }

  constructor(private formBuilder: FormBuilder) {
    this.setMortgageForm();
  }

}
