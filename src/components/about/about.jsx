import { Box } from "@mui/material";

//Components
import AboutDetails from "./aboutDetails";
import AboutSkills from "./aboutSkills";
import AboutTools from "./aboutTools";

const About = () => {
    return (
        <>
            <Box>
                <AboutDetails />
            </Box>

            <Box>
                <AboutSkills />
            </Box>

            <Box>
                <AboutTools />
            </Box>
        </>
    )
}

export default About;