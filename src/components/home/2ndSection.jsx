import { Link } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";
import DPImage from "../../assets/avatar.svg";

//Material Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

//Styling
const Container = styled(Box)(({ theme }) => ({
    width: "80%",
    margin: "auto",
    height: "100vh",
    // background: "aqua",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",

    [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "180vh",
        // background: "aqua",
    }
}))

const FirstContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
}))

const Details = styled(Box)`
    &>p{
        font-size: 18px;
        padding: 12px 0;
        text-align: justify;
    }
`

const SecondContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`

const SocialIconsBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & svg{
        color: #b827f2;
        background-color: white;
        font-size: 35px;
        padding: 8px;
        border-radius: 50%;
        transition: all .3s ease-in-out;

        &:hover{
            box-shadow: rgb(201, 91, 245) 0px 7px 29px 0px;
        }
    }
`

const SecondSection = () => {
    return (
        <>
            <Container>
                <FirstContainer>
                    <Box style={{ width: "70%" }}>
                        <Typography variant="h4" style={{ textAlign: "center" }}>LET ME <Typography variant="span" color="#c95bf5">INTRODUCE</Typography> MYSELF</Typography>
                        <Details>
                            <Typography>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</Typography>
                            <Typography>I'm fluent in class <Typography variant="span" color="#c95bf5">Javascript.</Typography></Typography>
                            <Typography>I'm passionate about building new <Typography variant="span" color="#c95bf5">web technologies and products.</Typography></Typography>
                            <Typography>Whenever possible, I also apply my passion for developing products with <Typography variant="span" color="#c95bf5">Node.js</Typography> and <Typography variant="span" color="#c95bf5">Modern Javascript Library and Framework</Typography> like <Typography variant="span" color="#c95bf5">React.js.</Typography></Typography>
                        </Details>
                    </Box>

                    <Box>
                        <img src={DPImage} alt="Avatar Image" />
                    </Box>
                </FirstContainer>

                <SecondContainer>
                    <Typography variant="h4">FIND ME ON</Typography>
                    <Typography style={{ textAlign: "center", fontSize: "14px", marginBottom: "10px" }}>Feel free to <Typography variant="span" color="rgb(201, 91, 245)">connect</Typography> with me</Typography>

                    <SocialIconsBox>
                        <Link to="https://github.com/Touheed0" target="blank"><GitHubIcon /></Link>
                        <Link to="https://www.facebook.com/tuheed.ahmad.9421450" target="blank"><FacebookIcon /></Link>
                        <Link to=""><LinkedInIcon /></Link>
                        <Link to="https://www.instagram.com/touheed____ahmad/" target="blank"><InstagramIcon /></Link>
                    </SocialIconsBox>
                </SecondContainer>
            </Container>
        </>
    )
}

export default SecondSection;