import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-totalsale-rw-previousmonth',
  templateUrl: './totalsale-rw-previousmonth.component.html'
})
export class TotalsaleRwPreviousmonthComponent implements OnInit {



  totalsaleRwPreviousMonth : any;
  

  constructor() { }

  ngOnInit() {

    this.totalsaleRwPreviousMonth = new Chart('totalsaleRwPreviousMonth', {
      type: 'bar',
      data: {
        labels: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6","Region 7","Region 8","Region 9","Region 10"],
        datasets: [{
            label: 'Total sale amount',
            data: [25, 24,13.5, 30, 24.8, 18.8, 45, 23, 50, 40],
            backgroundColor: [
                'rgba(0, 191, 243, 1)',
                'rgba(0, 191, 243, 1)',
                'rgba(0, 191, 243, 1)',
                'rgba(0, 191, 243, 1)',
                'rgba(0, 191, 243, 1)',
                'rgba(0, 191, 243, 1)',
                'rgba(0, 191, 243, 1)',
                'rgba(0, 191, 243, 1)',
                'rgba(0, 191, 243, 1)',
                'rgba(0, 191, 243, 1)'
            ],
            borderWidth: 0
        }]
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
