import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-daily-total-deposit-and-daily-total-sale-region-wise-last-month',
  templateUrl: './daily-total-deposit-and-daily-total-sale-region-wise-last-month.component.html'
})
export class DailyTotalDepositAndDailyTotalSaleRegionWiseLastMonthComponent implements OnInit {

  dTdepositAndTotalSaleRegionWiseLastMonth: any;

  constructor() { }

  ngOnInit() {

    this.dTdepositAndTotalSaleRegionWiseLastMonth = new Chart('dTdepositAndTotalSaleRegionWiseLastMonth', {
      type: 'bar',
      data: {
        labels: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6","Region 7","Region 8","Region 9","Region 10"],
        datasets: [{
              label: "Daily total deposit",
              backgroundColor: "#00a859",
              data: [28, 40, 30, 22, 45, 22, 13,10, 23,20]
          },
          {
              label: "Daily total sale",
              backgroundColor: "#fc2e01",
              data: [20, 22, 30, 35,28, 40, 30,13, 25, 20]
          }
        ]
    },
    options: {
      responsive:true,
      maintainAspectRatio:false,
      scales: {
        xAxes: [{
          barPercentage: 0.4,
          ticks: {
            fontSize: 15,
            fontColor: "#666666",
            fontFamily: 'Roboto'
          }
        }],
        yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'AMOUNT (GHC)',
                fontSize: 16,
                fontColor: "#666666",
                fontFamily: 'Roboto'
              },
              ticks: {
                  beginAtZero:true,
                  suggestedMin: 0,
                  suggestedMax: 50,
                  fontSize: 18,
                  fontColor: "#666666",
                  fontFamily: 'Roboto'
              }
        }]
      }
    }


    });

  }
}
