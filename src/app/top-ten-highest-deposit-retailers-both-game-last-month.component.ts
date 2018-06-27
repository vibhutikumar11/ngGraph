import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-top-ten-highest-deposit-retailers-both-game-last-month',
  templateUrl: './top-ten-highest-deposit-retailers-both-game-last-month.component.html'
})
export class TopTenHighestDepositRetailersBothGameLastMonthComponent implements OnInit {

  topTenHighestdepositRetailersBothGameLastMonth : any;

  constructor() { }

  ngOnInit() {

    this.topTenHighestdepositRetailersBothGameLastMonth = new Chart('topTenHighestdepositRetailersBothGameLastMonth', {
      type: 'bar',
      data: {
        labels: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6","Region 7","Region 8","Region 9","Region 10"],
        datasets: [{
            label: 'Total deposit amount Both game',
            data: [23, 50,40, 30, 24,18, 25, 24,13, 45],
            backgroundColor: [
                '#7b0046',
                '#7b0046',
                '#7b0046',
                '#7b0046',
                '#7b0046',
                '#7b0046',
                '#7b0046',
                '#7b0046',
                '#7b0046',
                '#7b0046'
            ],
            borderWidth: 0
        }]
    },
    options: {
      plugins: {
        datalabels: {
          color: 'white',
          anchor:'center',
          font: {
            weight: 'bold',
            size:'16'
          }
        }
      },
      responsive:true,
      animation: false,
      maintainAspectRatio:false,
      scales: {
        xAxes: [{
          barPercentage: 0.4,
          ticks: {
            fontSize: 13,
            fontColor: "#666666",
            fontFamily: 'Roboto'
          }
        }],
        yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'DEPOSIT AMOUNT (GHC)',
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
