import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import { useHistory } from "react-router";

const HomepageService = (props) => {
    const { title, price, img } = props.service;
    
    const history = useHistory();

    const handleIconBtn = () => {
        history.push("./classes");
    }

  return (
    <ImageListItem key={img}>
      <img src={img} alt={title} loading="lazy" />
          <ImageListItemBar
        title={title}
              subtitle={price}
              sx={{ fontWeight: "700" }}
        actionIcon={
          <IconButton
            onClick={handleIconBtn}
            sx={{ color: "rgba(255, 255, 255, 0.54)",mr:3 }}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default HomepageService;
