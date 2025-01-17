import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import logo from "./vlogo.gif";
import axios from "axios";
import * as serviceWorker from "./serviceWorker";
import Createquery from "./createquery";
import Viewqueries from "./viewing/viewqueries";
import ViewSolutions from "./viewing/viewsolutions";
function logindata() {
  let userd;
}
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: true,
      loginpage: true,
      userdata: undefined,
      createquery: false,
      viewquery: false,
      queryId: "",
      render: "login",
      viewsolutions: false,
      solutionId: "",
      question: undefined,
    };
    this.changehandler = this.changehandler.bind(this);
    this.forrendering = this.forrendering.bind(this);
  }
  changehandler(param) {
    //  e.preventDefault()
    this.setState(param);
  }
  forrendering(param) {
    switch (param) {
      case "login":
        return <Login data="anudeep" c={this.changehandler} />;
      case "viewquery":
        return <Viewqueries c={this.changehandler} />;
      case "viewsolutions":
        return (
          <ViewSolutions
            queryId={this.state.queryId}
            userdata={this.state.userdata}
            c={this.changehandler}
            question={this.state.question}
          />
        );
      case "createquery":
        console.log("this is userdata");
        console.log(this.state.userdata);
        return (
          <Createquery userdata={this.state.userdata} c={this.changehandler} />
        );
      case "about":
        return <About c={this.changehandler} />;

      case "logout":
        return <Login data="anudeep" c={this.changehandler} />;
    }
  }

  render() {
    return (
      <div>
        <Navbar c={this.changehandler} userdata={this.state.userdata} />
        {this.forrendering(this.state.render)}
      </div>
    );
  }
}
export default logindata;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.movetologin = this.movetologin.bind(this);
  }
  movetologin() {
    this.props.c({ render: "login" });
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
          <div>
            <h5
              style={{
                marginLeft: "20%",
                marginRight: "20%",
                marginTop: "5% ",
              }}
            >
              This project is aimed at developing online form for the group
              discussion This is a web-based tool. Any user can post the doubts
              topics and can reply for the other user doubts. The user can
              invites others for Discussion and submit query. This is useful for
              a small office, school or a department or for that matter any
              group who is interested to organize it effectively. Facility to
              share the resource and post articles that can be viewed by
              registered user.
            </h5>
            <h5
              style={{
                fontStyle: "serif",
                marginLeft: "32%",
                marginRight: "20%",
                marginTop: "5%",
                fontSize: "36px",
              }}
            >
              Your search for the solution ends here...!!{" "}
            </h5>
          </div>
        </body>
      </html>
    );
  }
}
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.forrendercreatequery = this.forrendercreatequery.bind(this);
    this.forenderviewquery = this.forenderviewquery.bind(this);
    this.forrenderabout = this.forrenderabout.bind(this);
    this.forlogout = this.forlogout.bind(this);
    this.forlogin = this.forlogin.bind(this);
  }
  forrendercreatequery() {
    if (this.props.userdata != undefined) {
      this.props.c({ render: "createquery" });
    }
  }
  forenderviewquery() {
    if (this.props.userdata != undefined) {
      this.props.c({ render: "viewquery" });
    }
  }
  forrenderabout() {
    {
      this.props.c({ render: "about" });
    }
  }
  forlogout() {
    this.props.c({ render: "logout" });
  }
  forlogin() {
    this.props.c({ render: "login" });
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
          <div>
            <div className="header ">
              <img
                src={logo}
                style={{ position: "absolute" }}
                align="center"
                height="140"
                width="140"
                alt="logo"
              />

              <h1 style={{ textAlign: "center", color: "white" }}>
                VCE Discussion-Board
              </h1>
              <p style={{ marginLeft: "55%", color: "white" }}>
                {" "}
                your search for the solution ends here...!!!
              </p>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#"
                    tabindex="-1"
                    style={{ color: "yellow" }}
                    onClick={this.forlogin}
                  >
                    Log In
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#"
                    style={{ color: "yellow" }}
                    onClick={this.forrendercreatequery}
                  >
                    Createquery
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#"
                    style={{ color: "yellow" }}
                    onClick={this.forrenderabout}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    style={{ color: "yellow" }}
                    href="#"
                    tabindex="-1"
                    onClick={this.forenderviewquery}
                  >
                    Viewqueries
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    style={{ color: "yellow" }}
                    href="#"
                    tabindex="-1"
                    onClick={this.forlogout}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      signupemail: "",
      signuppassword: "",
      mobilenumber: "",
      email: "ajay@gmail.com",
      password: "123456",
      nav: props.data,
    };
    this.handlechange = this.handlechange.bind(this);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }
  handlechange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  login(e) {
    // console.log("clicked on login", Date.now());
    e.preventDefault();
    // let userDetails = {
    //   userId: "aj",
    //   firstName: "aj",
    //   lastName: "aj",
    //   password: "aj",
    //   email: "aj@gmail.com",
    //   mobileNumber: 2525252525,
    //   createdOn: 1587663197939,
    // };
    // logindata.userd = userDetails;
    // this.props.c({ userdata: userDetails });
    // // alert("success")
    // this.props.c({ render: "viewquery" });
    axios
      .post("http://127.0.0.1:3001/api/v1/users/login", this.state)
      .then((response) => {
        logindata.userd = response.data.data.userDetails;
        this.props.c({ userdata: response.data.data.userDetails });
        // alert("success")
        this.props.c({ render: "viewquery" });
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  }
  signup(e) {
    let signupdetails = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mobileNumber: this.state.mobilenumber,
      email: this.state.signupemail,
      password: this.state.signuppassword,
    };
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/api/v1/users/signup", signupdetails)
      .then((response) => {
        // alert("success");
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

          <style></style>
        </head>
        <body>
          <div className="col-md-3 one">
            <div className="form-group ">
              <form onSubmit={this.login}>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.handlechange}
                />
                <br />
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handlechange}
                />

                <br />
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ marginLeft: "41%" }}
                >
                  LogIn
                </button>
              </form>
            </div>
          </div>
          <br />
          <hr />
          <h3 style={{ textAlign: "center" }}>Not Registered?</h3>

          <div
            style={{ marginLeft: "30%", marginRight: "30%", marginTop: "1%" }}
          >
            <form onSubmit={this.signup}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={this.state.firstName}
                  aria-describedby="emailHelp"
                  onChange={this.handlechange}
                  placeholder="Enter First Name"
                  required
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handlechange}
                  aria-describedby="emailHelp"
                  placeholder="Enter Last Name"
                  required
                />
                <br />
                <input
                  type="email"
                  className="form-control"
                  name="signupemail"
                  value={this.state.signupemail}
                  onChange={this.handlechange}
                  aria-describedby="emailHelp"
                  placeholder="Enter EmailId"
                  required
                />
                <br />
                <input
                  type="password"
                  className="form-control"
                  name="signuppassword"
                  onChange={this.handlechange}
                  value={this.state.signuppassword}
                  aria-describedby="emailHelp"
                  placeholder="Enter Password"
                  required
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="mobilenumber"
                  value={this.state.mobilenumber}
                  onChange={this.handlechange}
                  aria-describedby="emailHelp"
                  placeholder="Enter Mobile number"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
          <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">
              about us:
              <a href="https://w3.com"> Ajay, Maneesh, Prudhvi</a>
            </div>
            <div className="footer-copyright text-center py-3">
              <p>Studying at Vasavi College of Engineering, Department of IT</p>
            </div>
          </footer>
        </body>
      </html>
    );
  }
}

ReactDOM.render(<View />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
