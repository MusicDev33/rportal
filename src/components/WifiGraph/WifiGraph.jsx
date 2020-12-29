import React from 'react';
import superagent from 'superagent';
import Chart from 'chart.js';

const API = 'https://pi.shelbymccowan.com/r2';

export class WifiGraph extends React.Component {

  constructor() {
    super();
    this.state = {
      labels: ['Loading...'],
      data: [0],
      doneLoading: false
    }
  }

  componentDidMount() {
    superagent
          .get(`${API}/utils/wifidata`)
          .then(res => {
            const results = res.body.speedTests;
            console.log(results);
          })
          .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        <h1>WiFi Data</h1>
      </div>
    )
  }

}
