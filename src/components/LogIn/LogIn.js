import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LogIn = () => {
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
        pt: 20,
        pb: 45,
      }}
      style={bgStyle}
    >
      <Box sx={{ textAlign: "center", p: 10 }} style={formBgStyle}>
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3 }}>
          SIGN IN
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{ display: "block", mb: 2, width: 300 }}
          href="https://www.facebook.com/"
          target="_blank"
          style={{ backgroundColor: "#385898" }}
        >
          Sign In with Facebook
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ display: "block", mb: 2, width: 300 }}
          href="https://www.google.com/"
          target="_blank"
          style={{ backgroundColor: "#0057e7" }}
        >
          Sign In with Google
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ display: "block", mb: 2, width: 300 }}
          href="https://mail.google.com/mail/u/0/"
          target="_blank"
          style={{ backgroundColor: "#32a350" }}
        >
          Sign In with Gmail
        </Button>
      </Box>
    </Box>
  );
};

export default LogIn;
