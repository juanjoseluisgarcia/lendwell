import {Component, input} from '@angular/core';
import {CurrencyPipe, NgClass} from "@angular/common";

@Component({
  selector: 'lendwell-mortgage-result',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgClass
  ],
  templateUrl: './mortgage-result.component.html',
  styleUrl: './mortgage-result.component.scss'
})
export class MortgageResultComponent {

  monthlyPayment = input<number>(1000);
  years = input<number>(30);
  times = input<number>(4.1);
  loanAmount = input<number>(80);
  dataBlurred = input<Boolean>(true);

}
