import { Box } from "@mui/material";

//Components
import FirstSection from "./1stSection";
import SecondSection from "./2ndSection";

const Home = () => {
    return (
        <>
            <Box>
                <FirstSection />
            </Box>

            <Box>
                <SecondSection />
            </Box>
        </>
    )
}

export default Home;