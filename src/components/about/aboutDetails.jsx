import { Box, styled, Typography } from "@mui/material";
import AboutPicture from "../../assets/about.png";

//Styling
const MainContainer = styled(Box)`
    width: 100%;
`

const Conatainer = styled(Box)(({ theme }) => ({
    width: "80%",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "auto",

    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "center",
        gap: 50,
        height: "120vh",
        // background:"silver",
    }
}))

const AboutContent = styled(Box)(({ theme }) => ({
    "&>p": {
        fontSize: "15px",
        padding: "10px 0",
        textAlign: "justify",

        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
        }
    }
}))

const AboutImageStyling = styled("img")(({ theme }) => ({
    width: 400,
    objectFit: "cover",

    [theme.breakpoints.down("md")]: {
        width: 300
    }
}))


const AboutDetails = () => {
    return (
        <>
            <MainContainer>
                <Conatainer>
                    <AboutContent>
                        <Typography variant="h4" textAlign={"center"} marginBottom={4}>Know Who <Typography variant="span" color="#c95bf5">I'M</Typography></Typography>
                        <Typography>Hi, I’m <Typography variant="span" color="#c95bf5">Touheed Ahmad</Typography> from <Typography variant="span" color="#c95bf5">Bahawalpur, Pakistan</Typography> — a passionate <Typography variant="span" color="#c95bf5">MERN Stack Developer</Typography> who loves turning ideas into powerful digital experiences.</Typography>
                        <Typography>I completed my <Typography variant="span" color="#c95bf5">BS in Software Engineering</Typography> from The <Typography variant="span" color="#c95bf5">Islamia University of Bahawalpur (IUB)</Typography> and discovered my true passion for coding during my studies. Since then, I’ve been building modern, responsive, and dynamic web applications using <Typography variant="span" color="#c95bf5">MongoDB, Express.js, React.js, and Node.js.</Typography></Typography>
                        <Typography>I enjoy creating clean <Typography variant="span" color="#c95bf5">UI designs, integrating APIs, and optimizing performance</Typography> to craft seamless user experiences. Beyond web development, I’m deeply interested in <Typography variant="span" color="#c95bf5">Blockchain, Cloud Technologies</Typography>, and how they shape the future of the web.</Typography>
                    </AboutContent>

                    <Box>
                        <AboutImageStyling src={AboutPicture} alt="About Picture" />
                    </Box>
                </Conatainer>
            </MainContainer>
        </>
    )
}

export default AboutDetails;