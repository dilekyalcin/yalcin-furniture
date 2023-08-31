import {React} from 'react';

import Box from "@mui/material/Box";
import "./banner.css";
import Typography from "@mui/material/Typography";
export default function Banner() {
  return (
    <Box id="boxContainer" sx={{ width: "calc(100% - 40px)", margin: "0 auto" }}>
      <img src="/image/sofaset.png" alt="" id="image" />
      <Box id="boxContent">
        <Typography variant="h6">Huge Collection</Typography>
        <Typography id="subtitle" variant="h2">
          New Furniture
        </Typography>
        <Typography
          sx={{
            lineHeight: "1.25",
            letterSpacing: "1.25",
            marginBottom: "3em",
            marginLeft:"12em"
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea iure
          deleniti corporis nemo in pariatur aspernatur dolorem ratione dolore
          itaque! Cupiditate, in ut rerum voluptatum laboriosam magni fuga
          pariatur inventore est nisi corrupti nam, architecto cumque sint
          facere! Rerum, veniam.
        </Typography>
      </Box>
    </Box>
  );
}
