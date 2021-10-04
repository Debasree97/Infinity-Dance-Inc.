import { ImageList, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import HomepageService from "../HomepageService/HomepageService";

const HomepageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./homepageServices.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const titleStyle = {
    color: "#5e5c5d",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold", mt:20, mb:5}} style={titleStyle}>
        Check Out Our Servies
      </Typography>
      <ImageList sx={{mb:20}}>
        {services.map((service) => (
          <HomepageService key={service.id} service={service}></HomepageService>
        ))}
      </ImageList>
    </Box>
  );
};

export default HomepageServices;
