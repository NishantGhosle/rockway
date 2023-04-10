import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BrowseTab from "./BrowseTab";
import CollectionsTab from "./CollectionsTab";
import PlansTab from "./PlansTab";

function WorkoutTabs(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

WorkoutTabs.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "#fff",
          width: "100%",
        }}
      >
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            disableRipple
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "27px",
              textAlign: "center",
              borderBottom: "2px solid white",
              "&:focus": {
                outline: "none",
                color: "black",
              },
              "&.Mui-selected": {
                borderBottomColor: "red",
              },
            }}
            label="Browse"
            {...a11yProps(0)}
          />
          <Tab
            disableRipple
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "27px",
              textAlign: "center",
              borderBottom: "2px solid white",
              "&:focus": {
                outline: "none",
                color: "black",
              },
              "&.Mui-selected": {
                borderBottomColor: "red",
              },
            }}
            label="Collections"
            {...a11yProps(1)}
          />
          <Tab
            disableRipple
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "27px",
              textAlign: "center",
              borderBottom: "2px solid white",
              "&:focus": {
                outline: "none",
                color: "black",
              },
              "&.Mui-selected": {
                borderBottomColor: "red",
              },
            }}
            label="Plans"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <WorkoutTabs value={value} index={0}>
        <BrowseTab />
      </WorkoutTabs>
      <WorkoutTabs value={value} index={1}>
        <CollectionsTab />
      </WorkoutTabs>
      <WorkoutTabs value={value} index={2}>
        <PlansTab />
      </WorkoutTabs>
    </>
  );
}
