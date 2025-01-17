import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import axios from "axios";
import Querycard from "../card/querycard";
import logindata from "../index";
class ViewQueries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      querydata: undefined,
      tag: "",
    };
    this.buttonclicked = this.buttonclicked.bind(this);
    this.rerender = this.rerender.bind(this);
    this.myqueries = this.myqueries.bind(this);
  }
  componentDidMount() {
    console.log("this in component did mount");
    axios
      .get("http://127.0.0.1:3001/api/v1/query/all/" + this.state.tag)
      .then((response) => {
        console.log(response.data);
        const queriesdata = response.data.map((obj) => (
          <Querycard key={obj.queryId} data={obj} c={this.props.c} />
        ));
        console.log(queriesdata);
        this.setState({ querydata: queriesdata });
        console.log(this.state.querydata);
      });
  }
  rerender(val) {
    console.log("this in 2component did mount");
    axios
      .get("http://127.0.0.1:3001/api/v1/query/all/" + val)
      .then((response) => {
        console.log(response);
        if (response.data != "no queries found") {
          const queriesdata = response.data.map((obj) => (
            <Querycard key={obj.queryId} data={obj} c={this.props.c} />
          ));
          console.log(queriesdata);
          this.setState({ querydata: queriesdata });
          console.log(this.state.querydata);
        } else {
          this.setState({ querydata: "no queries" });
        }
      });
  }
  myqueries() {
    axios
      .get(
        "http://127.0.0.1:3001/api/v1/query/all/mine/" + logindata.userd.userId
      )
      .then((response) => {
        console.log(response);
        if (response.data != "no queries found") {
          const queriesdata = response.data.map((obj) => (
            <Querycard key={obj.queryId} data={obj} c={this.props.c} />
          ));
          console.log(queriesdata);
          this.setState({ querydata: queriesdata });
          console.log(this.state.querydata);
        } else {
          this.setState({ querydata: "no queries" });
        }
      });
  }
  buttonclicked(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.rerender(e.target.value);
  }
  render() {
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="/css/app.component.css"
            type="text/css"
          />
          <script
            type="text/js"
            src="node_modules/react/dist/react.min.js"
          ></script>
          <script
            type="text/js"
            src="node_modules/react-dom/dist/react-dom.min.js"
          ></script>
        </head>
        <body>
          <div style={{ marginTop: "3%" }}>
            <button
              className="btn btn-success"
              style={{ marginLeft: "25%" }}
              name="tag"
              value="OperatingSystem"
              onClick={this.buttonclicked}
            >
              OperatingSystem
            </button>
            <button
              className="btn btn-success"
              style={{ marginLeft: "2%" }}
              name="tag"
              value="ComputerNetworks"
              onClick={this.buttonclicked}
            >
              ComputerNetworks
            </button>

            <button
              className="btn btn-success"
              style={{ marginLeft: "2%" }}
              name="tag"
              value="ReactJs"
              onClick={this.buttonclicked}
            >
              ReactJs
            </button>
            <button
              className="btn btn-success"
              style={{ marginLeft: "2%" }}
              name="tag"
              value="NodeJs"
              onClick={this.buttonclicked}
            >
              NodeJs
            </button>

            <button
              className="btn btn-success"
              style={{ marginLeft: "2%" }}
              name="tag"
              value=""
              onClick={this.buttonclicked}
            >
              all
            </button>
            {this.state.querydata == "no queries" && (
              <h3 style={{ marginLeft: "35%", marginTop: "10%" }}>
                No Queries to Display{" "}
              </h3>
            )}
            {this.state.querydata != "no queries" && (
              <div>{this.state.querydata}</div>
            )}
          </div>
        </body>
      </html>
    );
  }
}
export default ViewQueries;
