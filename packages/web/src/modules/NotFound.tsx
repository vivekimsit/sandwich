import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <Paper className="paperIn">
        404 Error !!
        <br />
        <br />
        <Link to="/">Home</Link>
      </Paper>
    );
  }
}

export default NotFound;
