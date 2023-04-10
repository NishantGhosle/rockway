import { Grid, Box } from "@mui/material";
import React from "react";
import browseone from "../../images/browseone.jpg";
import browsetwo from "../../images/browsetwo.jpg";
import browsethree from "../../images/browsethree.jpg";

function BrowseTab() {
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img src={browseone} alt="browseone" width="100%" height="100%" />
          </Grid>
          <Grid item xs={12}>
            <img src={browsetwo} alt="hello" width="100%" height="100%" />
          </Grid>
          <Grid item xs={12}>
            <img src={browsethree} alt="hello" width="100%" height="100%" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default BrowseTab;
