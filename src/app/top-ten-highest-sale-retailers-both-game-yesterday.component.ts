import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-top-ten-highest-sale-retailers-both-game-yesterday',
  templateUrl: './top-ten-highest-sale-retailers-both-game-yesterday.component.html'
})
export class TopTenHighestSaleRetailersBothGameYesterdayComponent implements OnInit {
  
  topTenHighestSaleRetailersBothGameYesterday : any;

  constructor() { }

  ngOnInit() {

    this.topTenHighestSaleRetailersBothGameYesterday = new Chart('topTenHighestSaleRetailersBothGameYesterday', {
      type: 'bar',
      data: {
        labels: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6","Region 7","Region 8","Region 9","Region 10"],
        datasets: [{
            label: 'Total sale amount Both game',
            data: [40, 30, 24.8, 18.8, 25, 24,13.5, 45, 23, 50],
            backgroundColor: [
                '#a0410d',
                '#a0410d',
                '#a0410d',
                '#a0410d',
                '#a0410d',
                '#a0410d',
                '#a0410d',
                '#a0410d',
                '#a0410d',
                '#a0410d'
            ],
            borderWidth: 0
        }]
    },
    options: {
      responsive:true,
      animation: false,
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
