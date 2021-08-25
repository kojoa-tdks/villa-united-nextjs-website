/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CalendarToday } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
     {/* 
     <ListItem className={classes.listItem}>
        <Button
          href="#reservations"
          color="transparent"
          className={classes.navLink}
        >
          <CalendarToday className={classes.icons} /> Varaukset
        </Button>
      </ListItem> 
     */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Seuraa meitä instagramissa"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/himosvillaunited"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />Instagram
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="tiktok-tooltip"
          title="Seuraa meitä tiktokissa"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.tiktok.com/@himosvillaunited?lang=fi"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-tiktok"} />TikTok
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
