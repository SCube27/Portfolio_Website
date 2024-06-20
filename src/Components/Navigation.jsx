import { AppBar, Button, Drawer, Fab, Grid, List, ListItemButton, ListItemText, Toolbar, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

export default function Navigation() {

    const isLargeScreen = useMediaQuery('(min-width:1000px)');
    const [open, setOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
    };

    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor:'#101010', padding:'10px' }}>
                <Toolbar sx={{ marginX: '36px' }}>
                    <Grid container>
                        <Grid item xs={4} lg={5}>
                            <Button sx={{ marginX: '20px', fontSize: '24px', color: '#ecf3fb' }}>
                                LOGO
                            </Button>
                        </Grid>
                        <Grid item xs={8} lg={7} sx={{ textAlign: 'end', alignSelf:'center' }}>
                            {isLargeScreen ?
                                (
                                    <>
                                        <Button onClick={() => scrollToSection('home')} sx={{ marginX: '16px', fontSize: '24px', color: '#ecf3fb', fontFamily: "Roboto Condensed", fontWeight: '700' }}>
                                            Home
                                        </Button>
                                        <Button onClick={() => scrollToSection('skills')} sx={{ marginX: '16px', fontSize: '24px', color: '#ecf3fb', fontFamily: "Roboto Condensed", fontWeight: '700' }}>
                                            Skills
                                        </Button>
                                        <Button onClick={() => scrollToSection('about')} sx={{ marginX: '16px', fontSize: '24px', color: '#ecf3fb', fontFamily: "Roboto Condensed", fontWeight: '700' }}>
                                            About Me
                                        </Button>
                                        <Button onClick={() => scrollToSection('work')} sx={{ marginX: '16px', fontSize: '24px', color: '#ecf3fb', fontFamily: "Roboto Condensed", fontWeight: '700' }}>
                                            Work
                                        </Button>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <Button onClick={() => { setOpen(true) }} sx={{ marginX: '20px', fontSize: '24px', color: '#ffffff'}}>
                                            <MenuIcon />
                                        </Button>
                                        <Drawer variant="temporary" open={open} onClose={() => { setOpen(false) }}>
                                            <List className="scroller" sx={{ width: "12rem" }}>
                                                <ListItemButton onClick={() => scrollToSection('home')}>
                                                    <ListItemText primary="Home" />
                                                </ListItemButton>
                                                <ListItemButton onClick={() => scrollToSection('skills')}>
                                                    <ListItemText primary="Skills" />
                                                </ListItemButton>
                                                <ListItemButton onClick={() => scrollToSection('about')}>
                                                    <ListItemText primary="About Me" />
                                                </ListItemButton>
                                                <ListItemButton onClick={() => scrollToSection('work')}>
                                                    <ListItemText primary="Work" />
                                                </ListItemButton>
                                            </List>
                                        </Drawer>
                                    </>
                                )
                            }
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}