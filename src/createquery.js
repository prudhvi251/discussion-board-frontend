import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";

class Createquery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      tag: "",
    };
    this.handlequery = this.handlequery.bind(this);
    this.handlebutton = this.handlebutton.bind(this);
    this.handleform = this.handleform.bind(this);
  }
  handlequery(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handlebutton(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleform(e) {
    e.preventDefault();
    let querydata = {
      query: this.state.query,
      tag: this.state.tag,
      username:
        this.props.userdata.firstName + " " + this.props.userdata.lastName,
      userId: this.props.userdata.userId,
    };
    console.log("This is query data");
    console.log(querydata);
    axios
      .post("http://127.0.0.1:3001/api/v1/query/create/", querydata)
      .then((response) => {
        // alert("success");
        this.props.c({ render: "viewquery" });
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
        <body>
          <div className="container">
            <h2 align="center">ADD QUERY</h2>
            <div
              className="row"
              style={{
                textAlign: "left",
                marginLeft: "15%",
                marginRight: "15%",
              }}
            >
              <div className="col-md-12">
                <form onSubmit={this.handleform}>
                  <div className="form-group"></div>
                  <div className="form-group">
                    <textarea
                      name="query"
                      className="form-control"
                      rows="3"
                      placeholder="write your query.."
                      onChange={this.handlequery}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="btn btn-dark"
                    style={{ marginLeft: "15%", marginRight: "3%" }}
                    name="tag"
                    onClick={this.handlebutton}
                    value="OperatingSystem"
                  >
                    OperatingSystem
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark"
                    style={{ marginRight: "3%" }}
                    name="tag"
                    onClick={this.handlebutton}
                    value="ComputerNetworks"
                  >
                    ComputerNetworks
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark"
                    style={{ marginRight: "3%" }}
                    name="tag"
                    onClick={this.handlebutton}
                    value="ReactJs"
                  >
                    ReactJs
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark"
                    style={{ marginRight: "3%" }}
                    name="tag"
                    onClick={this.handlebutton}
                    value="NodeJs"
                  >
                    NodeJs
                  </button>
                  <h1 style={{ padding: 10, marginLeft: "25%" }}>
                    tag:{this.state.tag}
                  </h1>
                  <br />
                  <br />
                  <br />
                  <button
                    className="btn btn-success"
                    style={{ marginLeft: "35%" }}
                  >
                    Post the Query
                  </button>
                </form>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}
export default Createquery;
