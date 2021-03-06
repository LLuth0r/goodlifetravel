// REACT DEPENDENCIES
import {Link} from "react-router-dom";
import React from "react";
import {useState} from "react";

// MATERIAL UI COMPONENTS
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// ICONS
import MenuIcon from "@material-ui/icons/Menu";
import {
  FaUserTie,
  FaSuitcaseRolling,
  FaPlus,
  FaCameraRetro,
  FaSignOutAlt,
} from "react-icons/fa";

// STYLES
import {makeStyles} from "@material-ui/core/styles";
import "../styles/FooterNav.css";

const useStyles = makeStyles({
  list: {
    color: "whitesmoke",
    fill: "whitesmoke",
  },
});

const FooterNav = (props) => {
  // Pulls currentUser object and the handleLogout function from props
  const {currentUser, handleLogout} = props;

  // Sets the anchor point for the drawer as the bottom of the page
  const anchor = "bottom";

  // Creates a toggle state to open and close the nav drawer
  const [toggle, setToggle] = useState(false);

  // Toggle function to open and close the drawer when the click event is triggered
  const toggleDrawer = (anchor, open) => (event) => {
    setToggle({...toggle, [anchor]: open});
  };

  const classes = useStyles();

  const list = (anchor) => (
    <div
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.list}>
        <ListItem button component={Link} to="/login">
          <ListItemIcon>
            <FaUserTie className="drawer-icon" />
          </ListItemIcon>
          {currentUser ? (
            <React.Fragment>
              <p className="user-name">{`Hello, ${currentUser.username}`}</p>
            </React.Fragment>
          ) : (
            <ListItemText primary="Login" />
          )}
        </ListItem>
        {/* <ListItem>
          <ListItemIcon>
            <FaRegCalendarAlt className="drawer-icon" />
          </ListItemIcon>
          <ListItemText primary="Itinerary" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FaMoneyBillAlt className="drawer-icon" />
          </ListItemIcon>
          <ListItemText primary="Budget" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FaHotel className="drawer-icon" />
          </ListItemIcon>
          <ListItemText primary="Hotels" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FaPlane className="drawer-icon" />
          </ListItemIcon>
          <ListItemText primary="Flights" />
        </ListItem> */}
        {currentUser ? (
          <>
            <ListItem>
              <ListItemIcon>
                <FaSuitcaseRolling className="drawer-icon" />
              </ListItemIcon>
              <ListItemText primary="My Trips" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaPlus className="drawer-icon" />
              </ListItemIcon>
              <ListItemText primary="Add Trip" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaCameraRetro className="drawer-icon" />
              </ListItemIcon>
              <ListItemText primary="Photos" />
            </ListItem>
            <ListItem button onClick={handleLogout} type="submit">
              <ListItemIcon>
                <FaSignOutAlt className="drawer-icon" />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </>
        ) : null}
      </List>
    </div>
  );

  return (
    <div className="nav-container">
      <div className="logo-container">
        <div className="logo"></div>
      </div>
      {currentUser ? (
        <>
          <p>{`Welcome, ${currentUser.first_name}`} </p>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon className="menu-icon" />
          </Button>
          <Drawer
            className={classes.list}
            anchor={anchor}
            open={toggle[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </>
      ) : (
        <>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon className="menu-icon" />
          </Button>
          <Drawer
            className={classes.list}
            anchor={anchor}
            open={toggle[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </>
      )}
    </div>
  );
};

export default FooterNav;
