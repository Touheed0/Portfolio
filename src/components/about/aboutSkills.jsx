import { Box, Grid, styled, Typography } from "@mui/material";
import skillsData from "../../utils/skills";

//Styling
const Container = styled(Box)`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 100vh;
    /* background-color: silver; */
`

const IconBox = styled(Box)(({ theme }) => ({
    backgroundColor: "transparent",
    border: "2px solid rgba(201, 91, 245, 0.3)",
    borderRadius: "12px",
    textAlign: "center",
    padding: "40px 40px",
    cursor: "pointer",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
        border: "2px solid rgb(201, 91, 245)",
        transform: "scale(1.1)",
    },
    "& svg": {
        fontSize: "50px",
        color: "white",
    },
}));


const AboutSkills = () => {
    return (
        <>
            <Container>
                <Typography textAlign={"center"} variant="h4">Professional <Typography variant="span" color="#c95bf5">Skillset</Typography></Typography>

                <Grid container spacing={3}>
                    {
                        skillsData.map((skill) => (
                            <Grid key={skill.id} size={{ xs: 6, sm: 6, md: 3 }}>
                                <IconBox>
                                    <skill.icon />
                                </IconBox>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
}

export default AboutSkills;