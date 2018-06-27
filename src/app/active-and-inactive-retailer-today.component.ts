import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-active-and-inactive-retailer-today',
  templateUrl: './active-and-inactive-retailer-today.component.html'
})
export class ActiveAndInactiveRetailerTodayComponent implements OnInit {
  
  activeAndInactiveRetailerToday : any;


  constructor() { }

  ngOnInit() {

    this.activeAndInactiveRetailerToday = new Chart('activeAndInactiveRetailerToday', {
      type: 'doughnut',
      data: {
        labels: ["Active Login", "Inactive  Login"],
        datasets: [{
            data: [70, 30],
            backgroundColor: [
                '#009a52',
                '#fd0404'
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
            size: '26'
          }
        }
      },
      events: false,
      tooltips: {
        enabled: false
      },
      responsive:true,
      animation: false,
      maintainAspectRatio:false,
      cutoutPercentage:35
    }

    });


    
  }
}
