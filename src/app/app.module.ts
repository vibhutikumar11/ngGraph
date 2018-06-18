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

@NgModule({
  declarations: [
    AppComponent,
    TotalsaleRwYesterdayComponent,
    TotalsaleRwLastsevendaysComponent,
    TotalsaleRwPreviousmonthComponent,
    TotalsaleGwLastsevendaysComponent,
    TotalsaleTrendgraphComponent,
    TopfiveRetailerSaleComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
