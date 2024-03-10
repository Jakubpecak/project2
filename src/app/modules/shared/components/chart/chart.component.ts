import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, TooltipItem } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January 2024',
      'February 2024',
      'March 2024',
      'April 2024'
    ],
    datasets: [
      {
        data: [420000, 480000, 465000, 493000],
        label: 'Kraków, Average price',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.5)',
        pointRadius: 7,
        pointHoverRadius: 9,
        borderWidth: 2,
        borderDash: [5, 5],
        pointStyle: 'rectRounded',
      },
      {
        data: [120000, 630000, 165000, 193000],
        label: 'Rzeszów, Average price',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(85,120,210,0.5)',
        pointRadius: 7,
        pointHoverRadius: 9,
        borderWidth: 2,
        pointStyle: 'circle',
      }
    ]
  };
  
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          padding: 20,
          font: {
            size: 16,
          },
          color: '#fff',
        }
      },
      y: {
        suggestedMax: 800000,
        max: 800000,
        ticks: {
          padding: 20,
          font: {
            size: 16,
          },
          color: '#fff',
          callback: function(value, _index, _values) {
            return value + ' zł';
          }
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#fff',
          font: {
            size: 16,
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: TooltipItem<'line'>) {
            return `${context.dataset.label}: ${context.parsed.y} zł`;
          }
        }
      }
    },
    elements: {
      line: {
        borderWidth: 3
      }
    },
    onClick: (event, elements, chart) => {
    },
  };
  
  lineChartLegend = true;

  constructor() {}

  ngOnInit() {}

}