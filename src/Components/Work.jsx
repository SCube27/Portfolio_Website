import { Card, CardMedia, CardContent, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { useState } from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/quora1.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p2.png";
import p5 from "../assets/p5.png";

export default function Work() {

    const projects = [
        {
            id: 1,
            name: "CodeStars",
            description: "A online judge where you can solve DSA questions",
            image: p1
        },
        {
            id: 2,
            name: "Sneaker Hunt",
            description: "An automated web scraping system, that retrieves the best price for your favourite sneaker from the renowned websites on internet,",
            image: p5
        },
        {
            id: 3,
            name: "Quora Digest",
            description: "A end to end backend system for a Q&A like application where you can post questions and answers, follow users and topics that attract you most.",
            image: p2
        },
        {
            id: 4,
            name: "NovaNest",
            description: "A simple web-based chat application where you can chat with other users.",
            image: p3
        },
        {
            id: 5,
            name: "Financial AI Chatbot",
            description: "A ChatGPT based AI chatbot which can be used to get real time data of the stocks, calculate and plot their performance chart for a given time window.",
            image: p4
        },
    ];

    const [hoveredCard, setHoveredCard] = useState(null);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

    return (

        <Grid container sx={{ marginTop: '40px', paddingX: { xs: '8px', sm: '40px' }, marginBottom: '80px', display: 'flex', justifyContent: 'space-between' }}>
            <Grid container sx={{ marginBottom: '40px' }}>
                <Grid item xs={12} sx={{ marginY: '12px', textAlign: 'center' }}>
                    <Typography sx={{ fontSize: { xs: '44px', sm: '64px' }, fontWeight: '1000', fontFamily: "Source Sans 3", WebkitTextStrokeWidth: '2px', color: '#232427', WebkitTextStrokeColor: '#fffdf7' }}>
                        PROJECTS
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '44px', sm: '64px' }, marginTop: { xs: '-69px', sm: '-100px' }, marginLeft: '6px', fontWeight: '1000', fontFamily: "Source Sans 3", color: '#ecf3fb' }}>
                        PROJECTS
                    </Typography>
                </Grid>
            </Grid>

            {projects.map((project) => (

                <Grid item xs={12} md={3.5} key={project.id}
                    onMouseEnter={() => !isSmallScreen && setHoveredCard(project.id)} onMouseLeave={() => !isSmallScreen && setHoveredCard(null)}
                    sx={{ border: '0.1px solid #151517', boxShadow: "8px 6px 4px #030303", marginBottom: '20px', position: 'relative', overflow: 'hidden', '&:hover .overlay': { opacity: 1 } }}>

                    <Card sx={{ borderRadius: '0px' }}>
                        <CardMedia sx={{ height: { xs: '200px', sm: '300px', md: '400px' }, position: 'relative' }}>
                            <img src={project.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </CardMedia>

                        {isSmallScreen ? (
                            <CardContent sx={{ textAlign: 'start', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#ecf3fb', padding: '16px', }}>
                                <Typography sx={{ fontFamily: "Source Sans 3", fontWeight: '900', fontSize: '48px', color: '#e8f1fa' }}>
                                    {project.name}
                                </Typography>
                                <Typography sx={{ fontFamily: "Roboto Condensed", fontSize: '20px', color: '#b9c0c8', fontWeight: '350' }}>
                                    {project.description}
                                </Typography>
                            </CardContent>
                        )
                            :
                            (
                                hoveredCard === project.id && (
                                    <CardContent className="overlay" sx={{ boxSizing: 'border-box', overflow: 'hidden', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.92)', color: '#ecf3fb', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: 0, transition: 'opacity 0.3s ease-in-out', textAlign: 'center' }}>
                                        <Typography sx={{ fontFamily: "Source Sans 3", fontWeight: '900', fontSize: '64px', color: '#e8f1fa' }}>
                                            {project.name}
                                        </Typography>
                                        <Typography sx={{ fontFamily: "Roboto Condensed", fontSize: '20px', color: '#b9c0c8', fontWeight: '350' }}>
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                )
                            )
                        }

                    </Card>

                </Grid>

            ))}

        </Grid>

    );

}