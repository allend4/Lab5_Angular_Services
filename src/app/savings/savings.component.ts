import { Component, OnInit } from '@angular/core';
import { InterestService } from '../interest.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private service:InterestService) { }

  
  Total: number;
  Amount: number = 5000;
  interestRate: number = 0.01;
  annualCompound: number = 1;
  years: number;

  calaulateinterest(): void{
    this.Total = this.service.calaulateinterest(this.years);
  }

  /*
  calaulateinterest(): void {
    for (var counter: number = 1; counter < this.years + 1; counter++) {
      this.Total = this.Amount * Math.pow((1 +
      this.interestRate / this.annualCompound),
      (this.annualCompound * counter));
    }
  }
*/

  ngOnInit(): void {
  }

}
