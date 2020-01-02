import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('lineChart') private chartRef;    
  chart: any; 
  public dataPoints: any = [];
  public dataPoints1: any = [];
  public dataPoints2: any = [];
  public labels: any = [];

  constructor() { }

  ngOnInit() {
    this.dataPoints = [1, 0.8, 2, 0.7, 3, 0.3, 4, 3.6,5];
    this.dataPoints1 = [1, 1.2, 2.9, 1.5, 4, 0.3, 5, 4.6,4];
    this.dataPoints2 = [1, 3, 0.6, 4, 0.8, 2.1, 3.9, 2, 4.4];
    this.labels = ["A", "B", "C", "D", "E"]
    this.drawChart();
  }

  drawChart(){
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels, // your labels array
        datasets: [
          {
            data: this.dataPoints, // your data array
            borderColor: '#FF6F00',
            fill: true,
            backgroundColor: "#FF6F00"
          },
          {
            data: this.dataPoints1, // your data array
            borderColor: '#D81B60',
            fill: true,
            backgroundColor: "#D81B60"
          },
          {
            data: this.dataPoints2, // your data array
            borderColor: '#AFB42B',
            fill: true,
            backgroundColor: "#AFB42B"
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: true
            },
            ticks: {
              fontColor: "#9fa8da"
            },
            display: true
          }],
          yAxes: [{
            gridLines: {
              display: false,
              drawBorder: true
            },
            ticks: {
              fontColor: "#9fa8da"
            },
            display: true
          }],
        }
      }
    });
  }

}
