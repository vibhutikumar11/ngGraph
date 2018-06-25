import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-daily-total-deposit-and-daily-total-sale-day-wise',
  templateUrl: './daily-total-deposit-and-daily-total-sale-day-wise.component.html'
})
export class DailyTotalDepositAndDailyTotalSaleDayWiseComponent implements OnInit {

  dTdepositAndTotalSaleDayWise: any;

  
  constructor() { }

  ngOnInit() {

    this.dTdepositAndTotalSaleDayWise = new Chart('dTdepositAndTotalSaleDayWise', {
      type: 'bar',
      data: {
        labels: ["Draw 1", "Draw 2", "Draw 3", "Draw 4", "Draw 5", "Draw 6","Draw 7"],
        datasets: [{
              label: "Daily total deposit",
              backgroundColor: "#1178e1",
              data: [28, 18, 30, 22, 45, 10, 23]
          },
          {
              label: "Daily total sale",
              backgroundColor: "#534741",
              data: [20, 22, 13, 25, 20, 30, 15]
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
