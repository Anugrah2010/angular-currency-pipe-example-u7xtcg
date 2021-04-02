import { CurrencyPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  money = 7867657.9876896;
  transformedMoney: String;
  digitInfo = '0.2-2';
  constructor(private readonly currencyPipe: CurrencyPipe){}
  ngOnInit(): void {
    this.moneyChanged();
    throw new Error("Method not implemented.");
  }
  moneyChanged() {
      this.transformedMoney = this.currencyPipe.transform(
      this.money,
      'USD',
      true,
      this.digitInfo,
    );
  }
}
