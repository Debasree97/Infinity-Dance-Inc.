import { Box } from "@mui/system";
import React from "react";
import notFound from "../../images/notFound.png";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();

  const handleBackBtn = () => {
    history.push("./home");
  };

  const btnStyle = {
      backgroundColor: "#5e5c5d",
      fontWeight:"500"
  };

  const iconStyle = {
    color: "#b895a1",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mb: 20,
      }}
    >
      <img width="400" src={notFound} alt="" />
      <Button
        onClick={handleBackBtn}
        variant="contained"
        startIcon={<HomeIcon style={iconStyle} />}
        sx={{ boxShadow: 10 }}
        style={btnStyle}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
