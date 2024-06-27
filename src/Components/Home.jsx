import { GitHub, LinkedIn, Mail, Phone, Twitter } from "@mui/icons-material";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import profile from "../assets/Profile.jpg";

export default function Home() {
    return (
        <Grid container sx={{ paddingX: { xs: '10px', md: '40px' }, paddingY:{ xs: '10px', md: '20px' } }}>

            <Grid item xs={12} md={5} lg={4} sx={{ padding: { xs: '2px', md: 'inherit' } }}>
                <Grid container>
                    <Grid item sx={{ backgroundColor: "#232427", height: '450px', width: '100%', border: '0.1px solid #151517', boxShadow: "8px 6px 4px #030303" }}>
                        <img src={profile} style={{ height: '100%', width: '100%' }} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sx={{ border: '0.1px solid #151517', boxShadow: "8px 6px 4px #030303", backgroundColor: "#232427", height: '220px', width: '100%', paddingX: { xs: '5%', lg: '7%' }}}>
                        <Grid container>
                            <Grid item xs={12} sx={{ marginY: '12px' }}>
                                <Typography sx={{ fontSize: '50px', fontWeight: '1000', fontFamily: "Source Sans 3", WebkitTextStrokeWidth: '1px', color: '#232427', WebkitTextStrokeColor: '#fffdf7' }}>
                                    CONTACT
                                </Typography>
                                <Typography sx={{ fontSize: '50px', marginTop: '-74px', marginLeft:'2px', fontWeight: '1000', fontFamily: "Source Sans 3", color: '#ecf3fb' }}>
                                    CONTACT
                                </Typography>

                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                        <Mail sx={{ fontFamily: "Roboto Condensed", fontSize: '40px', color: '#b9c0c8', marginRight: '5px', }} />
                                        <a href="mailto:sahilshah2104@gmail.com" style={{ color: '#b9c0c8', fontSize: '18px', fontWeight: '600', textDecoration: 'none' }}>
                                            sahilshah2104@gmail.com
                                        </a>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Phone sx={{ fontFamily: "Roboto Condensed", fontSize: '40px', color: '#b9c0c8', marginRight: '5px' }} />
                                        <a href="tel:919370543244" style={{ color: '#b9c0c8', fontSize: '18px', fontWeight: '600', textDecoration: 'none' }}>
                                            +91 9370543244
                                        </a>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

            <Grid item xs={12} md={7} lg={8} sx={{marginTop: {xs:'20px', md:'0px'}}}>
                <Grid container>
                    <Grid item xs={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginX: { xs: '10px', md: '0px' } }}>
                            <Typography sx={{ textAlign: '-webkit-left', fontSize: { xs: '68px', md: '98px' }, marginRight: '40px', fontWeight: '1000', fontFamily: "Source Sans 3", WebkitTextStrokeWidth: '2px', color: '#232427', WebkitTextStrokeColor: '#eef5fb' }}>
                                SAHIL
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '68px', md: '98px' }, marginLeft: '56px', lineHeight: '0.2', fontWeight: '1000', fontFamily: "Source Sans 3", color: '#e8f1fa' }}>
                                SHAH
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ borderRadius: '0px', border: '0.1px solid #151517', boxShadow: "8px 6px 4px #030303", marginTop: '-10px', height: '350px', marginX: { xs: '20px', lg: '0px' }, marginLeft: { md: '6rem', lg: '7rem' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', textAlign: 'center' }}>
                    <Typography sx={{fontFamily: "Roboto Condensed", color: '#b9c0c8', marginBottom: '20px', fontSize: { xs: '16px', md: '20px' } }}>
                    Backend & ML Developer with a passion for creating strong, robust and extensible backend systems with a good amount of exposure in Machine Learning Algorithms. 
                    Skilled in using modern tech to build efficient and scalable applications.  
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Link href="https://github.com/SCube27" sx={{ display: 'flex', alignItems: 'center', marginX: '10px' }}>
                            <GitHub sx={{ fontSize: '40px', color: '#f7f2f0' }} />
                        </Link>
                        <Link href="https://twitter.com/SCube2721" sx={{ display: 'flex', alignItems: 'center', marginX: '10px' }}>
                            <Twitter sx={{ fontSize: '40px', color: '#f7f2f0' }} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/sahils2721/" sx={{ display: 'flex', alignItems: 'center', marginX: '10px' }}>
                            <LinkedIn sx={{ fontSize: '40px', color: '#f7f2f0' }} />
                        </Link>
                    </Box>
                </Box>
                <Button href="https://drive.google.com/file/d/1C7gXUhNRJNIktC-hW7u58pP4Ae69F1Uo/view" sx={{fontFamily: "Roboto Condensed", float:'inline-end', marginTop:'40px', fontSize:{xs: '20px', lg:'32px'}, width:{xs:'50%', lg:'40%'}, marginRight:{xs:'30px'}, border: '0.1px solid #151517', boxShadow: "8px 6px 4px #030303", color:'#f7f2f0', borderRadius:'50px'}}>
                    Download CV
                </Button>
            </Grid>
        </Grid>
    );

}