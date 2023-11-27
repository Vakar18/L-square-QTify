import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ReactComponent as UpIcon } from "./up.svg";
import "./accordion.css";

export default () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--css-black)",
      }}
    >
      <h1 className="heading">FAQs</h1>
      <div
        className="accordion-section"
        style={{
          backgroundColor: "var(--css-black)",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "500",
          fontSize: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid var(--css-white)",
            width: "1135px",
            marginBottom: "20px",
            marginTop: "20px",
            borderRadius: "10px",
            borderColor: "var(--css-white)", 
            overflow: "hidden",
          }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<UpIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Is Qtify free to use?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Yes, it is 100% free and has 0% ads!</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div
          style={{
            border: "0.5px solid var(--css-white)",
            width: "1135px",
            marginBottom: "20px",
            borderRadius: "10px",
            borderColor: "var(--css-white)", 
            overflow: "hidden",
          }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<UpIcon />}
              aria-controls="panel1a-content"
              id="panel2a-header"
            >
              <Typography>
                Can I download and listen to songs offline?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sorry, unfortunately we don't provide the service to download
                songs.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
