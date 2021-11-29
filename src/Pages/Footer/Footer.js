import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CopyrightIcon from '@mui/icons-material/Copyright';
import React from "react";

const Footer = () => {
  return (
    <Box sx={{backgroundColor:"#111",py:1,mt:3}}>
      <Typography  variant="overline" color="white" display="flex" sx={{justifyContent:"center",alignItems:"center"}} gutterBottom>
   <CopyrightIcon sx={{mr:1}} /> All Copyright Reserved
  </Typography>
    </Box>
  );
};

export default Footer;
