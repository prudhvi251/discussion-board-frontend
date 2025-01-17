import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../index.css";
import logindata from "../index";
class Solutioncard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: undefined,
      data: undefined,
      voted: [],
    };
    this.gettingvotes = this.gettingvotes.bind(this);
    this.editingvotes = this.editingvotes.bind(this);
  }
  gettingvotes() {
    axios
      .get(
        "http://127.0.0.1:3001/api/v1/solution/" +
          this.props.queryId +
          "/" +
          this.props.data.solutionId
      )
      .then((response) => {
        // alert("success");
        console.log(response.data.upvotes);
        this.setState({ data: response.data });
        this.setState({ upvotes: response.data.upvotes });
        // alert("votes final:" + this.props.data.upvotes);
        this.setState({ voted: this.props.data.voted });
        console.log("finding voted:");
        console.log(this.props.data.voted);
        console.log("userid" + this.props.data.userId);
        let flag = 0;
        for (let i = 0; i < this.props.data.voted.length; i++) {
          if (this.props.data.voted[i] == logindata.userd.userId) {
            flag = 1;
            //  alert("already voted");
          }
        }
        if (flag == 0) {
          this.editingvotes(this.props.data.upvotes);
        }
      })
      .catch((error) => {
        //alert("Error")
        console.log(error);
      });
  }
  editingvotes(votes) {
    var voters = [];
    voters = this.props.data.voted;
    console.log(this.props.data.userId);
    voters.push(logindata.userd.userId);
    let data = {
      solution: this.state.data.solution,
      upvotes: this.props.data.upvotes + 1,
      username: this.state.data.username,
      queryId: this.state.data.queryId,
      solutionId: this.state.data.solutionId,
      created: this.state.data.created,
      voted: voters,
    };
    // alert("upvotes:" + data.upvotes);
    axios
      .put(
        "http://127.0.0.1:3001/api/v1/solution/" +
          this.props.queryId +
          "/" +
          this.props.data.solutionId,
        data
      )
      .then((response) => {
        //  alert("success");
        this.props.click();
      })
      .catch((error) => {
        //alert("Error")
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
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
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
          <style></style>
        </head>
        <body style={{}}>
          {
            //<div class="card w-75">
            //<div class="card-body">
            // <h5 class="card-title">Card title</h5>
            /*<p class="card-text">{this.props.data.solution}</p>
    <p>UPVOTES:</p>
    <p>vote:</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
*/
          }
          <div
            style={{
              borderRadius: "20px",
              boxShadow: "10px 10px 10px  LightBlue",
              marginLeft: "10%",
              marginRight: "13%",
              marginBottom: "1%",
            }}
          >
            <div>
              <span style={{ display: "" }}>
                <p style={{ marginRight: "", whiteSpace: "pre" }}>
                  {this.props.data.username}{" "}
                  <button
                    style={{}}
                    className="btn btn-success"
                    style={{ marginLeft: "75%", marginTop: "" }}
                    onClick={this.gettingvotes}
                  >
                    vote
                  </button>{" "}
                  {this.props.data.upvotes} votes
                </p>
                <h5>{this.props.data.solution} </h5>
              </span>
            </div>
            <br />
          </div>
        </body>
      </html>
    );
  }
}

export default Solutioncard;
