import React, { useState } from "react";
import { Tabs, Tab, AppBar, Typography, Toolbar } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { NavLink } from "react-router-dom";
export const Header = () => {
  const [value, setvalue] = useState(null);
  return (
    <div>
      <AppBar sx={{ backgroundColor: "green" }} position="sticky">
        <Toolbar>
          <Typography>
            <AutoStoriesIcon />
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setvalue(val)}
          >
            <Tab LinkComponent={NavLink} to="/books" label="Books"></Tab>
            <Tab LinkComponent={NavLink} to="/add" label="Add Book"></Tab>
            <Tab LinkComponent={NavLink} to="/about" label="About Us"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
