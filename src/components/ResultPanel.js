import React, {Component} from 'react'
import times from 'lodash/times'


function drawLinechart(targetDiv, scoreSeries) {
  window.google.charts.load('current', {packages: ['corechart', 'line']});
  window.google.charts.setOnLoadCallback(drawBasic);

  function drawBasic() {
        var data = new window.google.visualization.DataTable();
        data.addColumn('number', 'tick');
        data.addColumn('number', 'revenue');
        data.addColumn({type: 'string', role: 'tooltip'})

        var drawScoreSeries = scoreSeries.map((score, idx) => [idx, score, score.toString(10)])
        data.addRows(drawScoreSeries)

        var options = {
          hAxis: {
            title: 'Week'
          },
          vAxis: {
            title: 'Revenue'
          },
          legend: 'none'
        };

        var chart = new window.google.visualization.LineChart(targetDiv);
        chart.draw(data, options);
      }
}

class ResultPanel extends Component {
  componentDidMount() {
    const {scoreSeries} = this.props
    drawLinechart(this.targetDiv, scoreSeries)
  }

  render() {
    return (
      <div>
        {this._renderStars()}
        <div ref={(ref) => this.targetDiv=ref}></div>
      </div>
    )
  }

  _renderStars = () => {
    const {star} = this.props
    const solidStars = times(star, () => '★')
    return solidStars.join('').padEnd(3, '☆')
  }
}

export default ResultPanel
