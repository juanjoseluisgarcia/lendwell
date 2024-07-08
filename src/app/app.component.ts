import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MortgageFormComponent} from "./mortage-calculator/components/mortage-form/mortgage-form.component";
import {MortgageResultComponent} from "./mortage-calculator/components/mortage-result/mortgage-result.component";
import {MortgageResult} from "./mortage-calculator/Models/mortgageResult";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MortgageFormComponent, MortgageResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lendwell';
  loanAmount: number = 0;
  monthlyPayment: number = 0;
  times: number = 0;
  blurred: boolean = true;

  setResults($event: MortgageResult) {
    this.loanAmount = $event.amount;
    this.monthlyPayment = $event.amount / ($event.years * $event.times);
    this.times = $event.times;
    this.blurred = false;
  }
}
