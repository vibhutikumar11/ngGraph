import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TotalsaleRwYesterdayComponent } from './totalSale/regionWise/totalsale-rw-yesterday.component';
import { TotalsaleRwLastsevendaysComponent } from './totalsale/regionwise/totalsale-rw-lastsevendays.component';
import { TotalsaleRwPreviousmonthComponent } from './totalsale/regionwise/totalsale-rw-previousmonth.component';
import { TotalsaleGwLastsevendaysComponent } from './totalsale/gamewise/totalsale-gw-lastsevendays.component';
import { TotalsaleTrendgraphComponent } from './totalsale/totalsale-trendgraph.component';
import { TopfiveRetailerSaleComponent } from './totalsale/topfive-retailer-sale.component';
import { ActiveAndInactiveRetailerTodayComponent } from './active-and-inactive-retailer-today.component';
import { DailyTotalDepositAndDailyTotalSaleDayWiseComponent } from './daily-total-deposit-and-daily-total-sale-day-wise.component';
import { DailyTotalDepositAndDailyTotalSaleRegionWiseYesterdayComponent } from './daily-total-deposit-and-daily-total-sale-region-wise-yesterday.component';
import { DailyTotalDepositAndDailyTotalSaleRegionWiseLastMonthComponent } from './daily-total-deposit-and-daily-total-sale-region-wise-last-month.component';
import { ActiveAndInactiveRetailerLastSevenDaysComponent } from './active-and-inactive-retailer-last-seven-days.component';
import { TopTenHighestSaleRetailersBothGameYesterdayComponent } from './top-ten-highest-sale-retailers-both-game-yesterday.component';
import { TopTenHighestSaleRetailersBothGameLastMonthComponent } from './top-ten-highest-sale-retailers-both-game-last-month.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalsaleRwYesterdayComponent,
    TotalsaleRwLastsevendaysComponent,
    TotalsaleRwPreviousmonthComponent,
    TotalsaleGwLastsevendaysComponent,
    TotalsaleTrendgraphComponent,
    TopfiveRetailerSaleComponent,
    ActiveAndInactiveRetailerTodayComponent,
    DailyTotalDepositAndDailyTotalSaleDayWiseComponent,
    DailyTotalDepositAndDailyTotalSaleRegionWiseYesterdayComponent,
    DailyTotalDepositAndDailyTotalSaleRegionWiseLastMonthComponent,
    ActiveAndInactiveRetailerLastSevenDaysComponent,
    TopTenHighestSaleRetailersBothGameYesterdayComponent,
    TopTenHighestSaleRetailersBothGameLastMonthComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
