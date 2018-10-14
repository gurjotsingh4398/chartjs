import React, { Component } from "react";
import axios from "axios";
import { Radar } from "react-chartjs-2";
class Charts extends Component {
  state = {
    datas: [],
    inten: []
  };

  componentWillMount() {
    axios.get("jsondata.json").then(response => {
      this.setState({ datas: response.data.data }, () => {
        var datap = this.state.datas;
        const hero = datap.map(data => data.intensity);
        this.setState({
          inten: hero
        });
      });
    });
  }

  render() {
    var data = {
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running"
      ],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: this.state.inten
        },
        {
          label: "My First datasetssss",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [1, 2, 3, 4]
        }
      ]
    };
    return (
      <div>
        {" "}
        Chart Component
        <Radar data={data} />
      </div>
    );
  }
  componentDidMount() {}
}

export default Charts;
