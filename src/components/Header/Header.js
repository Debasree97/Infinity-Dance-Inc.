import React from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../../images/logo1.jpg";
import { Box } from "@mui/system";

const Header = () => {
  const style = {
    textDecoration: "none",
    color: "#5e5c5d",
    marginLeft: "20px",
  };
  const activeStyle = {
    color: "#b895a1",
    padding: "5px",
    borderRadius: "5px",
    boxShadow: "inset 3px 3px lightgray",
    backgroundColor: "#d3d3d333",
  };
  const imgStyle = {
    width: "180px",
  };
  return (
    <Box sx={{ display: "flex", px: 10, alignItems: "center", py: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
        <img style={imgStyle} src={logo1} alt="" />
      </Box>
      <Box sx={{ fontWeight: "bold", fontSize: 20 }}>
        <NavLink style={style} activeStyle={activeStyle} to="/home">
          Home
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/about">
          About Us
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/classes">
          Services/Classes
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/forum">
          Sign Up
        </NavLink>
      </Box>
    </Box>
  );
};

export default Header;
