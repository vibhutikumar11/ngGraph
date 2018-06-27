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
              data: [30, 45, 40, 45, 50]    
          },
          {
              label: "Retailer 2",
              fill: false,
              backgroundColor: "#f87910",
              borderColor: "#f87910",
              data: [40, 35, 45, 20, 50]
          },
          {
            label: "Retailer 3",
            fill: false,
            backgroundColor: "#534741",
            borderColor: "#534741",
            data: [30, 20, 34, 17, 18]
          },
          {
            label: "Retailer 4",
            fill: false,
            backgroundColor: "#00746b",
            borderColor: "#00746b",
            data: [30, 25, 40, 5, 45]
          },
          {
            label: "Retailer 5",
            fill: false,
            backgroundColor: "#ed1c24",
            borderColor: "#ed1c24",
            data: [20, 15, 16, 29, 36]
          }
        ]
        
    },
    options: {
      plugins: {
        datalabels: {
          color: 'white',
          backgroundColor: function(context) {
            return context.dataset.backgroundColor;
          },
          borderRadius: 4,
          anchor:'center',
          font: {
            weight: 'bold'
          }
        }
      },
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
