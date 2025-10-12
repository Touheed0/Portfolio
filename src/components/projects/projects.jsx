import { Box, Button, Grid, styled, Typography } from "@mui/material";
import projects from "../../utils/projects";

//Styling
const Container = styled(Box)`
    width: 80%;
    height: auto;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    /* background-color: sienna; */
`

const ProjectContainer = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    padding: 10px 20px;
    box-shadow: #c95bf564 0px 3px 8px;
    transition: all .5s;
    /* background-color: saddlebrown; */

    &:hover{
        transform: scale(1.05);
        box-shadow: #c95bf5 0px 3px 8px;
    }
`

const ProjectImage = styled("img")({
    width: 300,
    objectFit: "cover",
})

const ProjectDescription = styled(Typography)(({ theme }) => ({
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 2
}))

const ProjectButtonsContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const ProjectButtons = styled(Button)`
    background-color: #c95bf550;
    text-transform: none;
    transition: all .3s ease-in-out;

    &:hover{
        background-color: #c95bf5;
    }
`

const Projects = () => {
    return (
        <>
            <Container>
                <Box>
                    <Typography variant="h4">My Recent <Typography variant="span" color="#c95bf5" fontWeight={800}>Works</Typography></Typography>
                    <Typography fontSize={"14px"}>Here are a few projects I've worked on recently.</Typography>
                </Box>

                <Box marginTop={"5%"}>
                    <Grid container spacing={4}>
                        {
                            projects.map((project) => (
                                <Grid key={project.id} size={{ lg: 4, md: 6, sm: 12 }}>
                                    <ProjectContainer>
                                        <Box>
                                            <ProjectImage src={project.picture} alt="Project Picture" />
                                        </Box>

                                        <Box>
                                            <Typography variant="h6" color="#c95bf5">{project.title}</Typography>
                                        </Box>

                                        <Box>
                                            <ProjectDescription>{project.description}</ProjectDescription>
                                        </Box>

                                        <ProjectButtonsContainer>
                                            <ProjectButtons href={project.gitHub} target="blank" variant="contained">GitHub</ProjectButtons>
                                            <ProjectButtons href={project.demo} target="blank" variant="contained">Live Demo</ProjectButtons>
                                        </ProjectButtonsContainer>
                                    </ProjectContainer>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Projects;