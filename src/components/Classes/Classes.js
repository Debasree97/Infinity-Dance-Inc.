import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SingleClass from "../SingleClass/SingleClass";
import { Typography } from "@mui/material";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("./classes.JSON")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const style = {
    backgroundColor: "#b895a173",
  };
  const titleStyle = {
    color: "#5e5c5d",
  };

  return (
    <Box sx={{ flexGrow: 1, p: 10 }} style={style}>
      <Typography
        variant="h2"
        sx={{ display: "flex", justifyContent: "center",mb:5,fontWeight:"bold" }}
        style={titleStyle}
      >
        Our Offered Classes
      </Typography>
      <Grid container spacing={{ sm: 2, md: 3 }}>
        {classes.map((singleClass) => (
          <Grid item md={12} lg={6}>
            <SingleClass
              singleClass={singleClass}
              key={singleClass.id}
            ></SingleClass>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Classes;
