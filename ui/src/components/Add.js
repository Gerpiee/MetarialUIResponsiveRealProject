import { Tooltip } from "@mui/material";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const Add = () => {
  return (
    <Tooltip sx={{ "& > :not(style)": { m: 4 } }}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default Add;
