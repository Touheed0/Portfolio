import { Box, Typography, styled } from "@mui/material";

// Styling
const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#111",
    color: "#fff",
    padding: "30px 0",
    textAlign: "center",
    width: "100%",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    position: "relative",
    bottom: 0,
    left: 0,
}));


const FooterText = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    letterSpacing: "0.5px",

    [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
    },
}));

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>
                © {new Date().getFullYear()} <b>Tuheed Ahmad</b>. All Rights Reserved.
            </FooterText>
            <FooterText>
                Built with ❤️ using <b>React.js & Material UI</b>
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;