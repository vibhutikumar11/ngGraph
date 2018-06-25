import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-totalsale-gw-lastsevendays',
  templateUrl: './totalsale-gw-lastsevendays.component.html'
})
export class TotalsaleGwLastsevendaysComponent implements OnInit {
  totalsaleGwLastsevendays: any;

  
  constructor() { }

  ngOnInit() {

    this.totalsaleGwLastsevendays = new Chart('totalsaleGwLastsevendays', {
      type: 'bar',
      data: {
        labels: ["Draw 1", "Draw 2", "Draw 3", "Draw 4", "Draw 5", "Draw 6","Draw 7"],
        datasets: [{
              label: "5/90",
              backgroundColor: "#116cc9",
              data: [28, 18, 30, 22, 15, 10, 23]
          },
          {
              label: "10/90",
              backgroundColor: "#f87910",
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
                labelString: 'SALE AMOUNT (GHC)',
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
