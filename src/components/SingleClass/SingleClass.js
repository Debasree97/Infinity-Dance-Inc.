import { Badge, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const SingleClass = (props) => {
  const { title, category, instructor, price, program, description, img } =
    props.singleClass;

  const titleStyle = {
    color: "#b895a1",
    fontWeight: "bold",
  };
  return (
    <Badge badgeContent={price} color="secondary">
      <Card sx={{ maxWidth: 550, minHeight: 300, display: "flex", mb: 5, boxShadow: 7 }}>
        <CardMedia
          sx={{
            dispaly: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
          component="img"
          alt=""
          margin="10px"
          width="300"
          height="300"
          image={img}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            style={titleStyle}
            sx={{ fontSize: "h5.fontSize" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            {description}
          </Typography>
          <hr />
          <Typography variant="body1">
            <span sx={{ fontSize: "h5.fontSize" }} style={titleStyle}>
              Category :{" "}
            </span>
            {category}
          </Typography>
          <hr />
          <Typography variant="body1">
            <span sx={{ fontSize: "h5.fontSize" }} style={titleStyle}>
              Insturctor :{" "}
            </span>
            {instructor}
          </Typography>
          <hr />
          <Typography variant="body1">
            <span sx={{ fontSize: "h5.fontSize" }} style={titleStyle}>
              Session :{" "}
            </span>
            {program} Weeks
          </Typography>
        </CardContent>
      </Card>
    </Badge>
  );
};

export default SingleClass;
