import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-topfive-retailer-sale',
  templateUrl: './topfive-retailer-sale.component.html'
})
export class TopfiveRetailerSaleComponent implements OnInit {
  
  
topfiveRetailerSale: any;

  
  constructor() { }

  ngOnInit() {

    this.
    topfiveRetailerSale = new Chart('topfiveRetailerSale', {
      type: 'line',
      data: {
        labels: ["Retailer 1", "Retailer 2", "Retailer 3", "Retailer 4", "Retailer 5"],
        datasets: [{
              label: "Retailer 1",
              fill: false,
              backgroundColor: "#116cc9",
              borderColor: "#116cc9",
              data: [50, 43, 6, 40, 23]

              
          },
          {
              label: "Retailer 2",
              fill: false,
              backgroundColor: "#f87910",
              borderColor: "#f87910",
              data: [45, 46, 50, 4, 39]
          },
          {
            label: "Retailer 3",
            fill: false,
            backgroundColor: "#534741",
            borderColor: "#534741",
            data: [1, 21, 34, 17, 18]
          },
          {
            label: "Retailer 4",
            fill: false,
            backgroundColor: "#00746b",
            borderColor: "#00746b",
            data: [39, 22, 35, 4, 44]
          },
          {
            label: "Retailer 5",
            fill: false,
            backgroundColor: "#ed1c24",
            borderColor: "#ed1c24",
            data: [26, 15, 16, 29, 36]
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
