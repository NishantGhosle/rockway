import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Accordion
            sx={{
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
            elevation={0}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#131316" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#131316",
                }}
              >
                How can I book a workout class?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#595962",
                }}
              >
                You can just go to our pricing section and choose plan as per
                your requirement
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              my: 2,
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
            elevation={0}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#131316" }} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#131316",
                }}
              >
                Can I pay by cash for my membership?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Yes, You can</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              my: 2,
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
            elevation={0}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#131316" }} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#131316",
                }}
              >
                What age do I need to be to join?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>After 18</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              my: 2,
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
            elevation={0}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#131316" }} />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#131316",
                }}
              >
                Personal data
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>No</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              my: 2,
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
            elevation={0}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#131316" }} />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#131316",
                }}
              >
                Are there any lockers?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Yes</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              my: 2,
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
            elevation={0}
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#131316" }} />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#131316",
                }}
              >
                How do I cancel my membership?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>You can directly contact</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              my: 2,
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
            elevation={0}
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#131316" }} />}
              aria-controls="panel7bh-content"
              id="panel7bh-header"
            >
              {" "}
              <Typography
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#131316",
                }}
              >
                Is there water available at the gym?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Yes</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
}
