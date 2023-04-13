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
              <Typography>
                Yes, you can pay for your membership by cash. Please visit our
                gym reception during business hours to complete your payment.
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
              <Typography>
                You must be at least 16 years old to join our gym. We prioritize
                safety and well-being for our members and require a legal
                guardian's signature for anyone under 18 years old.
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
              <Typography>
                We take the privacy of our members seriously and ensure all
                personal data is securely stored and only used for gym-related
                purposes.
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
              <Typography>
                Yes, we offer lockers for our members to securely store their
                belongings during their workout. Please bring your own lock or
                purchase one at our gym reception.
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
              <Typography>
                To cancel your membership, please notify us in writing or via
                email at least 30 days prior to your desired cancellation date.
                Early termination fees may apply.
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
              <Typography>
                Yes, we have water fountains and a hydration station available
                for our members to use. Please bring a refillable water bottle
                to reduce waste and stay hydrated during your workout.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
}
