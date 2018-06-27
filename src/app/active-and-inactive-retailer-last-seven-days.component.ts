import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-active-and-inactive-retailer-last-seven-days',
  templateUrl: './active-and-inactive-retailer-last-seven-days.component.html'
})
export class ActiveAndInactiveRetailerLastSevenDaysComponent implements OnInit {


  activeAndInactiveRetailerLastSevenDays: any;

  
  constructor() { }

  ngOnInit() {

    this.activeAndInactiveRetailerLastSevenDays = new Chart('activeAndInactiveRetailerLastSevenDays', {
      type: 'bar',
      data: {
        labels: ["Draw  1", "Draw  2", "Draw  3", "Draw  4", "Draw  5", "Draw  6","Draw  7"],
        datasets: [{
              label: "Active login retailer",
              backgroundColor: "#009a52",
              data: [22, 45, 10, 23,40, 30, 22]
          },
          {
              label: "Inactive login retailer",
              backgroundColor: "#f40000",
              data: [ 25, 20, 30, 35,20, 22, 13]
          }
        ]
    },
    options: {
      plugins: {
        datalabels: {
          color: 'white',
          anchor:'center',
          font: {
            weight: 'bold',
            size:'14'
          }
        }
      },
      responsive:true,
      maintainAspectRatio:false,
      scales: {
        xAxes: [{
          barThickness : 35,
          barPercentage: 0.9,
          categoryPercentage: 0.8,
          ticks: {
            fontSize: 15,
            fontColor: "#666666",
            fontFamily: 'Roboto'
          }
        }],
        yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'NUMBERS OF RETAILERS',
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
