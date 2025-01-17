import React from "react";
import ReactDOM from 'react-dom';
import '../index.css';

class Querycard extends React.Component{
  constructor(props){
    super(props)
    this.forupdation=this.forupdation.bind(this)
    let utcDate=this.props.data.created
    let localDate = new Date(utcDate);
this.state={
  localDates:localDate
}
  }
  forupdation(){
    this.props.c({queryId:this.props.data.queryId})
    this.props.c({question:this.props.data.query})
    this.props.c({'render':'viewsolutions'})
  }
    render(){
        return(
            <html>
            <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
<link rel="stylesheet" href="/css/app.component.css" type="text/css" />
<script type="text/js" src="node_modules/react/dist/react.min.js"></script>
<script type="text/js" src="node_modules/react-dom/dist/react-dom.min.js"></script>
</head>
<body style={{marginLeft:"10%",marginTop:"5%",marginRight:"10%",marginBottom:"5%"}}>
<div className="card text-center">
  <div className="card-header">
Based on {this.props.data.tag}
  </div>
  <div className="card-body">
    <h5 className="card-title">{this.props.data.query}</h5>
    {//<p className="card-text">{this.props.data.query}</p>
    }
  </div>
  <div className="card-footer text-muted">
    {}
   created on {this.props.data.created}
  </div>
  <div>{this.props.key}</div>
  <button className="btn btn-success" onClick={this.forupdation}>view solutions</button>
  
</div>
</body>
</html>

        )
    }
}
export default Querycard