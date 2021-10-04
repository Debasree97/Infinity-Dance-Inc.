import { Box } from "@mui/system";
import React from "react";
import logo2 from "../../images/logo2.jpg";

const Footer = () => {
  const style = {
    backgroundColor: "#020204",
  };
  return (
    <Box
      style={style}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <img src={logo2} alt="" />
      </Box>
      <Box sx={{ color: "white", pb: 2 }}>
        <small>Copyright &#169; 2021 Debasree Bhowmik</small>
      </Box>
    </Box>
  );
};

export default Footer;
