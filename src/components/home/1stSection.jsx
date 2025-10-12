import { Box, styled, Typography } from "@mui/material";
import ProfileImage from "../../assets/home-main.svg";

//Styling
const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "80%",
    height: "100vh",
    margin: "auto",
    alignItems: "center",
    justifyContent: "space-between",
    // background: "silver",

    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
}))

const SkillHeading = styled(Typography)(({ theme }) => ({
    color: "#c95bf5",
    fontSize: 25,
    fontWeight: 700,

    [theme.breakpoints.down("md")]: {
        fontSize: 18,
    }
}))

const ProfilePicture = styled("img")(({ theme }) => ({
    width: 450,
    objectFit: "cover",

    [theme.breakpoints.down("md")]: {
        width: 400
    },
}))


const FirstSection = () => {
    return (
        <>
            <Container>
                <Box>
                    <Typography style={{ marginBottom: 15 }} variant="h4">Hi There! 👋🏻</Typography>
                    <Typography style={{ marginBottom: 30 }} variant="h4">I'M <Typography variant="span" color="#c95bf5">TOUHEED AHMAD</Typography></Typography>
                    <SkillHeading>Mern Stack Developer</SkillHeading>
                </Box>

                <Box>
                    <ProfilePicture src={ProfileImage} alt="profile image" />
                </Box>
            </Container>
        </>
    )
}

export default FirstSection;