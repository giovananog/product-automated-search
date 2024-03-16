import { Typography } from "@mui/material";
import React from "react";


export default function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" style={{position: 'absolute', fontWeight: 700, 
                                                                              bottom: '.5%', textAlign: 'center', width: '100%'}}>
      {'Copyright © '}
        Product Automated Search
      {' '}
      { new Date().getFullYear()}
      {/* {'.'} */}
    </Typography>
  );
}