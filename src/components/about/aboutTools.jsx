import { Box, Grid, styled, Typography } from "@mui/material";
import toolsData from "../../utils/Tools";

//Styling
const Container = styled(Box)(({ theme }) => ({
    width: "80%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    height: "100vh",
    // backgroundColor: "silver",

    [theme.breakpoints.down("md")]: {
        height: "100vh",
    },
}));

const IconBox = styled(Box)(({ theme }) => ({
    backgroundColor: "transparent",
    border: "2px solid rgba(201, 91, 245, 0.3)",
    borderRadius: "12px",
    textAlign: "center",
    padding: "40px",
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


const AboutTools = () => {
    return (
        <>
            <Container>
                <Typography textAlign={"center"} variant="h4"><Typography variant="span" color="#c95bf5">Tools</Typography> i use</Typography>

                <Grid container spacing={3}>
                    {
                        toolsData.map((tool) => (
                            <Grid key={tool.id} size={{ xs: 6, sm: 6, md: 3 }}>
                                <IconBox>
                                    <tool.icon />
                                </IconBox>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
}

export default AboutTools;