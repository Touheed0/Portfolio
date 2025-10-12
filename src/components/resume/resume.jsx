import { Box, Button, styled } from "@mui/material";
import { FaDownload } from "react-icons/fa";
import resume from "../../assets/Touheed Ahmad Resume.pdf";
import resumePage1 from "../../assets/Resume Page 1.jpeg";
import resumePage2 from "../../assets/Resume Page 2.jpeg";

// Styling
const Container = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    padding: "50px 0",
}));


const ResumeImage = styled("img")(({ theme }) => ({
    width: "60%",
    objectFit: "cover",
    transition: "all 0.3s ease",

    "&:hover": {
        transform: "scale(1.03)",
    },

    [theme.breakpoints.down("md")]: {
        width: "90%",
    },
}));


const DownloadButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#c95bf5",
    color: "white",
    fontWeight: 600,
    textTransform: "none",
    padding: "10px 25px",
    borderRadius: "8px",
    transition: "all 0.3s ease",

    "&:hover": {
        backgroundColor: "#a53ce0",
    },
}));


const Resume = () => {
    return (
        <Container>
            <DownloadButton
                startIcon={<FaDownload />}
                href={resume}
                download="Touheed_Ahmad_Resume.pdf"
            >
                Download CV
            </DownloadButton>


            <ResumeImage src={resumePage1} alt="Resume Page 1" />
            <ResumeImage src={resumePage2} alt="Resume Page 2" />


            <DownloadButton
                startIcon={<FaDownload />}
                href={resume}
                download="Touheed_Ahmad_Resume.pdf"
            >
                Download CV
            </DownloadButton>
        </Container>
    );
};

export default Resume;