import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import aboutUs from "../../images/aboutUs.jpeg";

const About = () => {
  const style = {
    color: "#b895a1",
    fontWeight: "700",
  };
  const imgStyle = {
    width: "600px",
  };
  const titleStyle = {
    color: "#b895a1",
    fontWeight: "bold",
  };
  return (
    <Box sx={{ display: "flex", px: 10, pt: 2 }}>
      <Box>
        <img style={imgStyle} src={aboutUs} alt="" />
      </Box>
      <Box
        sx={{
          ml: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h2" style={titleStyle}>
          About Us
        </Typography>
        <Typography
          sx={{ fontWeight: "medium", lineHeight: 2, textAlign: "justify" }}
        >
          If you’re looking for a school that serves a multitude of dance types,
          the <span style={style}>Infinity Dance Inc.</span> is the perfect
          choice for you. As one of the top dance studios, we aim to provide an
          amazing experience for kids and teens of all dance levels. Our studio
          is proud to have an excellent group of instructors who are fully
          qualified to teach a range of group classes, private lessons, and
          specialty workshops. Whether you’re a beginner or an experienced
          dancer, we’re sure to have something for you! In addition to our
          regular class offerings, the Infinity Dance Inc. offers workshops in
          and out of the studio! In the past, we have featured workshops from
          dance superstars such as Andrew Wojtal, Blake McGrath, Jessica Starr,
          Kaelynn Harris, Kenny Wormald, Savion Glover, Ellenore Scott, Jon Rua,
          Brianna Mercado, Ginger Cox, Caitlyn Abraham, Channing Cooke, Carlos
          Neto and Chris Hale. The Infinity Dance Inc. has also developed
          outreach programs that extend initiatives to Southern Maine school
          districts as well as many nonprofits. Our dance company strives to
          engage families to dance together and invite patrons to informational
          presentations and workshops.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
