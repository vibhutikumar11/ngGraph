import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-totalsale-rw-lastsevendays',
  templateUrl: './totalsale-rw-lastsevendays.component.html'
})
export class TotalsaleRwLastsevendaysComponent implements OnInit {


  totalsaleRwLastsevendays : any;


  constructor() { }

  ngOnInit() {

    this.totalsaleRwLastsevendays = new Chart('totalsaleRwLastsevendays', {
      type: 'bar',
      data: {
        labels: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6","Region 7","Region 8","Region 9","Region 10"],
        datasets: [{
            label: 'Total sale amount',
            data: [25, 24,13, 45, 23, 50, 40, 30, 24, 18],
            backgroundColor: [
                'rgba(0, 52, 113, 1)',
                'rgba(0, 52, 113, 1)',
                'rgba(0, 52, 113, 1)',
                'rgba(0, 52, 113, 1)',
                'rgba(0, 52, 113, 1)',
                'rgba(0, 52, 113, 1)',
                'rgba(0, 52, 113, 1)',
                'rgba(0, 52, 113, 1)',
                'rgba(0, 52, 113, 1)',
                'rgba(0, 52, 113, 1)'
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
