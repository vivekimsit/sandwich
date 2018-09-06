import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

export class NotFound extends React.Component {
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
