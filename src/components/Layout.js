import { AddCircleOutline, SubjectRounded } from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectRounded colot="secondary" />,
    path: "/",
  },
  {
    text: "Create Notes",
    icon: <AddCircleOutline colot="secondary" />,
    path: "/create",
  },
];

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div style={rootStyle}>
      {/* side nav - side drawer */}
      <Drawer sx={drawerStyle} variant="permanent" anchor="left">
        <div>
          <Typography variant="h5">Notes</Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              onClick={() => history.push(item.path)}
              style={location.pathname === item.path ? active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <div style={pageStyle}>{children}</div>
    </div>
  );
};

export default Layout;

// Styles
const pageStyle = {
  backgroundColor: "#f9f9f9",
  width: "100%",
};

const drawerWidth = 240;

const drawerStyle = {
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
};

const rootStyle = {
  display: "flex",
};

const active = {
  backgroundColor: "#f4f4f4",
};
