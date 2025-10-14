import { Link } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";

//Matrial Icons
import { GitHub, Facebook, LinkedIn, Instagram } from "@mui/icons-material";

//Styling
const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#111",
    color: "#fff",
    padding: "15px 40px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: "8px",
        padding: "20px 10px",
    }
}));

const FooterText = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    letterSpacing: "0.5px",

    [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
    }
}));

const SocialIcons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    justifyContent: "center",

    "& a": {
        color: "#fff",
    }
}));

const Footer = () => {
    return (
        <FooterContainer>
            {/* Left Text */}
            <FooterText>
                Designed and Developed by <b>Tuheed Ahmad</b>
            </FooterText>

            {/* Center Text */}
            <FooterText>Copyright © 2025 TA</FooterText>

            {/* Right Side Icons */}
            <SocialIcons>
                <Link to="https://github.com/Touheed0" target="blank"><GitHub fontSize="small" /></Link>
                <Link to="https://www.facebook.com/tuheed.ahmad.9421450" target="blank"><Facebook fontSize="small" /></Link>
                <Link to=""><LinkedIn fontSize="small" /></Link>
                <Link to="https://www.instagram.com/touheed____ahmad/" target="blank"><Instagram fontSize="small" /></Link>
            </SocialIcons>
        </FooterContainer>
    );
};

export default Footer;