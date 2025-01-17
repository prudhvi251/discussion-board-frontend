import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import axios from "axios";
import Solutioncard from "../card/solutioncard";
import logindata from "../index";

class ViewSolutions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solution: "",
      solutions: undefined,
      queryid: this.props.queryId,
      username:
        this.props.userdata.firstName + " " + this.props.userdata.lastName,
      userId: this.props.userdata.userId,
      voted: [1],
      upvotes: 0,
    };
    this.solutionhandler = this.solutionhandler.bind(this);
    this.formaftersubmitting = this.formaftersubmitting.bind(this);
    this.componentforrerender = this.componentforrerender.bind(this);
    this.forceUpdate();
  }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:3001/api/v1/solution/all/" + this.state.queryid)
      .then((response) => {
        //alert("success")
        console.log(response.data);
        const solutiondata = response.data.map((obj) => (
          <Solutioncard
            key={obj.solutionId}
            data={obj}
            c={this.props.c}
            queryId={this.state.queryid}
            click={this.componentforrerender}
          />
        ));
        console.log(solutiondata);
        this.setState({ solutions: solutiondata });
        this.props.c({ createquery: false, viewquery: true, loginpage: false });
        console.log(logindata.userd);
      })
      .catch((error) => {
        //alert("Error")
        console.log(error);
      });
    this.forceUpdate();
  }
  componentforrerender() {
    axios
      .get("http://127.0.0.1:3001/api/v1/solution/all/" + this.state.queryid)
      .then((response) => {
        //alert("success")
        console.log(response.data);
        const solutiondata = response.data.map((obj) => (
          <Solutioncard
            key={obj.solutionId}
            data={obj}
            c={this.props.c}
            queryId={this.state.queryid}
          />
        ));
        console.log(solutiondata);
        this.setState({ solutions: solutiondata });
        this.props.c({ createquery: false, viewquery: true, loginpage: false });
      })
      .catch((error) => {
        //alert("Error")
        console.log(error);
      });
  }
  solutionhandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  formaftersubmitting(e) {
    e.preventDefault();
    // alert("entered form after submitting method " + this.state.queryid);
    axios
      .post(
        "http://127.0.0.1:3001/api/v1/solution/create/" + this.state.queryid,
        this.state
      )
      .then((response) => {
        //  alert("success");
        this.componentforrerender();
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
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
        <body style={{ marginTop: "2%" }}>
          <h2 style={{ textAlign: "center" }}>{this.props.question}</h2>
          <div>{this.state.solutions}</div>
          <form>
            <input
              type="text"
              name="solution"
              value={this.state.solution}
              style={{
                width: "75%",
                marginTop: "2%",
                marginRight: "10%",
                marginLeft: "10%",
                marginBottom: "2%",
                maxLength: "35",
              }}
              onChange={this.solutionhandler}
            />
            <br />
            <button
              className="btn btn-success"
              style={{ marginLeft: "40%", marginBottom: "2%" }}
              onClick={this.formaftersubmitting}
            >
              submit
            </button>
          </form>
        </body>
      </html>
    );
  }
}
export default ViewSolutions;
