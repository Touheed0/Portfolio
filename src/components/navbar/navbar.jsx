import { useState } from "react";
import { AppBar, Box, Button, Toolbar, styled } from "@mui/material";;

import { Link } from "react-router-dom";

//material Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

//Styling
const Header = styled(AppBar)`
    background-color: rgba(27, 26, 46, 0.663);
    backdrop-filter: blur(10px);
    box-shadow: none;
    position: sticky;
`

const Container = styled(Toolbar)(({ theme }) => ({
    width: "80%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints.down("md")]: {
        width: "90%"
    }
}))

const Logo = styled(Link)(({ theme }) => ({
    fontSize: "30px",
    fontWeight: 900,
    color: "#c95bf5",
    cursor: "pointer",
    textDecoration: "none",

    [theme.breakpoints.down("md")]: {
        fontSize: "25px"
    }
}))


const NavLinks = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",

    [theme.breakpoints.down("md")]: {
        display: "none",
        flexDirection: "column",
        position: "fixed",
        top: 55,
        left: 0,
        width: "100%",
        backgroundColor: "rgb(27, 26, 46)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(5px)",
        padding: "20px 0",
        gap: "15px",
        zIndex: 1000,
    },

    "&.active": {
        [theme.breakpoints.down("md")]: {
            display: "flex"
        }
    }
}))

const NavLinkItems = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: all .3s ease-in;

    &:hover{
        color: #c95bf5;
    }
`

const GitHubButton = styled(Button)`
    background-color: #c95bf550;
    text-transform: none;
    transition: all .3s ease-in-out;

    &:hover{
        background-color: #c95bf5;
    }
`

const MenuToggle = styled(Box)(({ theme }) => ({
    display: "none",
    cursor: "pointer",

    [theme.breakpoints.down("md")]: {
        display: "block"
    }
}))

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Header>
                <Container>
                    <Box style={{ width: "30%" }}>
                        <Logo to="/">TA.</Logo>
                    </Box>

                    <NavLinks className={open ? "active" : ""}>
                        <NavLinkItems onClick={() => { setOpen(false) }} to="/">Home</NavLinkItems>
                        <NavLinkItems onClick={() => { setOpen(false) }} to="/about">About</NavLinkItems>
                        <NavLinkItems onClick={() => { setOpen(false) }} to="/projects">Projects</NavLinkItems>
                        <NavLinkItems onClick={() => { setOpen(false) }} to="/resume">Resume</NavLinkItems>
                        <GitHubButton href="https://github.com/Touheed0" target="blank" onClick={() => { setOpen(false) }} variant="contained">GitHub</GitHubButton>
                    </NavLinks>

                    {/* Menu / Close Icon */}
                    <MenuToggle onClick={() => setOpen(!open)}>
                        {open ? (
                            <CloseIcon style={{ fontSize: "30px", color: "#c95bf5" }} />
                        ) : (
                            <MenuIcon style={{ fontSize: "30px", color: "#c95bf5" }} />
                        )}
                    </MenuToggle>
                </Container>
            </Header>
        </>
    )
}

export default NavBar;