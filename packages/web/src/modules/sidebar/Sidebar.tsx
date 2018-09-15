import * as React from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import styled from "styled-components";
import {
  withStyles,
  WithStyles,
  Theme,
  createStyles
} from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    drawerPaper: {
      position: "relative",
      width: drawerWidth
    }
  });

interface IProps extends WithStyles<typeof styles> {}

export const SidebarWrapper = styled.div`
  display: flex;
  width: 256px;
  flex: 1,
  zIndex: 1,
  overflow: hidden,
  min-width: 256px;
  max-width: 256px;
  position: relative;
  align-self: stretch;
  flex-direction: column;
`;

class Sidebar extends React.PureComponent<IProps> {
  public render() {
    const { classes } = this.props;
    return (
      <SidebarWrapper>
        <Drawer
          open={true}
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
          style={{ display: "flex", flex: 1 }}
        >
          <List>
            <ListItem button={true} component={Link} {...{ to: "/dashboard" }}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button={true} component={Link} {...{ to: "/hotels" }}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Hotels" />
            </ListItem>
          </List>
        </Drawer>
      </SidebarWrapper>
    );
  }
}

export default withStyles(styles)<{}>(Sidebar);
