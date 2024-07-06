import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MortgageFormComponent} from "./mortage-calculator/components/mortage-form/mortgage-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MortgageFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lendwell';
}
