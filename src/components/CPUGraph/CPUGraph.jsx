import React from 'react';
import superagent from 'superagent';
import Chart from 'chart.js';
import styles from './CPUGraph.module.scss';

const API = 'https://pi.shelbymccowan.com/r2';

export class CPUGraph extends React.Component {
  chartRef = React.createRef();

  constructor() {
    super();
    this.state = {
      labels: ['Loading...'],
      data: [0],
      doneLoading: false
    }
  }

  componentDidMount() {
    const instChartRef = this.chartRef.current.getContext('2d');

    new Chart(instChartRef, {
      type: 'bar',
      data: {
          labels: this.state.labels,
          datasets: [{
              label: 'Usage',
              data: this.state.data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      suggestedMin: 100,
                      suggestedMax: 100
                  }
              }]
          }
      }
    });

    superagent
          .get(`${API}/utils/cpudata`)
          .then(res => {
            const results = res.body.results;
            const data = [];
            const labels = [];
            results.forEach((result) => {
              data.push(parseFloat(result.usage));
              labels.push(result.cpu);
            });
            this.setState({data: data, labels: labels, doneLoading: true});
            console.log(data);
          })
          .catch(err => console.log(err))
  }

  componentDidUpdate() {
    const instChartRef = this.chartRef.current.getContext('2d');

    new Chart(instChartRef, {
      type: 'bar',
      data: {
          labels: this.state.labels,
          datasets: [{
              label: 'Usage',
              data: this.state.data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      suggestedMin: 100,
                      suggestedMax: 100
                  }
              }]
          }
      }
    });
  }

  render() {
    return (
      <div className={'px-3 ' + styles['glass-chart']}>
        <canvas id='cpuChart' ref={this.chartRef}/>
      </div>
    );
  }
}
