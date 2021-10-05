import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const Forum = () => {
  const bgStyle = {
    backgroundImage:
      "url('https://i.pinimg.com/originals/5b/55/6d/5b556def67725ac428e109d19dad26cd.jpg')",
  };
  const formBgStyle = {
    backgroundColor: "#ffffff9e",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        pt: 20,
        pb: 32,
      }}
      style={bgStyle}
    >
      <Box sx={{ textAlign: "center", p: 10 }} style={formBgStyle}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Wanna keep track of our classes?
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3 }}>
          SIGN UP
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="p"
            sx={{ display: "block", mb: 3, fontWeight: "600", mr: 1 }}
          >
            Already a Member?
          </Typography>
          <NavLink to="./login" style={{ fontWeight: "500" }}>
            SIGN IN
          </NavLink>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Button
            variant="contained"
            size="large"
            sx={{ display: "block", mb: 2, width: 300 }}
            href="https://www.facebook.com/"
            target="_blank"
            style={{ backgroundColor: "#385898" }}
          >
            Sign Up with Facebook
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ display: "block", mb: 2, width: 300 }}
            href="https://www.google.com/"
            target="_blank"
            style={{ backgroundColor: "#0057e7" }}
          >
            Sign Up with Google
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ display: "block", mb: 2, width: 300 }}
            href="https://mail.google.com/mail/u/0/"
            target="_blank"
            style={{ backgroundColor: "#32a350" }}
          >
            Sign Up with Gmail
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Forum;
