import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-totalsale-trendgraph',
  templateUrl: './totalsale-trendgraph.component.html'
})
export class TotalsaleTrendgraphComponent implements OnInit {

  totalsaleTrendgraph: any;

  
  constructor() { }

  ngOnInit() {

    this.totalsaleTrendgraph = new Chart('totalsaleTrendgraph', {
      type: 'line',
      data: {
        labels: ["T1", "T2", "T3", "T4", "T5", "T6","T7","T8","T9","T10","T11","T12"],
        datasets: [{
              label: "Condition 1",
              fill: false,
              backgroundColor: "#116cc9",
              borderColor: "#116cc9",
              data: [50, 43, 6, 40, 23, 33, 44, 3, 4, 9, 34, 5]

              
          },
          {
              label: "Condition 2",
              fill: false,
              backgroundColor: "#f87910",
              borderColor: "#f87910",
              data: [45, 46, 50, 4, 39, 33, 26, 30, 2, 42, 32, 49 ]
          },
          {
            label: "Condition 3",
            fill: false,
            backgroundColor: "#534741",
            borderColor: "#534741",
            data: [1, 21, 34, 17, 18, 41, 6, 47, 45, 39, 40, 37 ]
          }
        ]
        
    },
    options: {
      responsive:false,
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
