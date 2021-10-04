import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import banner from "../../images/banner.jpg";

const Home = () => {
  const style = {
    color: "#bf95a1",
    backgroundColor: "#060606",
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: 10,
          width: "800",
        }}
        style={style}
      >
        <Typography variant="h1">Speak</Typography>
        <br />
        <Typography variant="h2" sx={{ fontWeight: "600" }}>
          Through
        </Typography>
        <br />
        <Typography variant="h1">Dance</Typography>
      </Box>
      <img width="75%" src={banner} alt="" />
    </Box>
  );
};

export default Home;
