import { Circle } from "@mui/icons-material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

export default function AboutMe() {

    const certi = [
        {
            id: 1,
            name: 'Machine Learning A-Z: AI, Python & R - Udemy'
        },
        {
            id: 2,
            name: 'Advanced Backend Development Lambda 3.0 - AlgoCamp'
        }
    ];

    const edu = [
        {
            id: 1,
            degree: 'BE',
            stream: 'Artificial Intelligence and Machine Learning',
            clg: 'PES Modern College of Engineering',
            start: '2020',
            end: '2024'
        },
        {
            id: 2,
            degree: 'HSC',
            stream: 'Science',
            clg: 'S.B Junior College, Pune',
            start: '2018',
            end: '2020'
        }

    ];

    const publication = [
        {
            id: 1,
            details: 'Generating Outfits using AI: A Brief Review, International Journal of Research and Analytical Reviews'
        },
    ]

    return (
        <Grid container sx={{ marginTop: '40px', paddingX: { xs: '8px', sm: '40px' }, marginBottom: '80px', display: 'flex', justifyContent: 'space-between' }}>

            <Grid container sx={{ marginBottom: '40px' }}>
                <Grid item xs={12} sx={{ marginY: '12px', textAlign: 'center' }}>
                    <Typography sx={{ fontSize: { xs: '44px', sm: '64px' }, fontWeight: '1000', fontFamily: "Source Sans 3", WebkitTextStrokeWidth: '2px', color: '#232427', WebkitTextStrokeColor: '#fffdf7' }}>
                        ABOUT ME
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '44px', sm: '64px' }, marginTop: { xs: '-69px', sm: '-100px' }, marginLeft: '6px', fontWeight: '1000', fontFamily: "Source Sans 3", color: '#ecf3fb' }}>
                        ABOUT ME
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} md={5.5} sx={{ border: '0.1px solid #151517', boxShadow: "8px 6px 4px #030303" }}>
                <Grid container>
                    <Grid item xs={12} sx={{ marginY: '12px', textAlign: 'center' }}>
                        <Typography sx={{ fontSize: { xs: '36px', sm: '48px' }, fontWeight: '1000', fontFamily: "Source Sans 3", color: '#e8f1fa', textShadow: '8px 8px 6px #030303' }}>
                            EDUCATION
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center">
                <Grid item xs={12} sx={{paddingY:'16px'}}>
                        {edu.map((e) => (
                            <Timeline key={e.id} sx={{ color: '#ecf3fb', marginY:'0px' }}>
                                <TimelineItem>
                                    <TimelineOppositeContent sx={{ fontFamily: "Roboto Condensed", color: '#b9c0c8', flex: 0.5, marginTop: '8px', fontSize: '20px', fontWeight: '600' }} align="right">
                                        {e.end} - {e.start}
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot sx={{ backgroundColor: '#74787d', borderWidth: '8px' }} />
                                        <TimelineConnector sx={{ backgroundColor: '#74787d' }} />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ paddingX: '4px', marginBottom: "12px", color: '#b9c0c8' }}>
                                        <Typography textAlign="center" sx={{ fontFamily: "Roboto Condensed", marginBottom: "6px", fontWeight: '600', fontSize: '28px' }}>
                                            {e.degree}
                                        </Typography>
                                        <Typography textAlign="center" sx={{ fontFamily: "Roboto Condensed", marginBottom: "6px", fontSize: '18px', fontWeight: '600' }}>
                                            {e.stream}
                                        </Typography>
                                        <Typography textAlign="center" sx={{ fontFamily: "Roboto Condensed", marginBottom: "6px" }}>
                                            <i>
                                                {e.clg}
                                            </i>
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline> 
                        ))}
                    </Grid>
                </Grid>

            </Grid>

            <Grid item xs={12} md={6}>

                <Grid container sx={{ marginTop: { xs: '20px', md: '0px' }, paddingX: '30px', border: '0.1px solid #151517', boxShadow: "8px 6px 4px #030303" }}>
                    <Grid item xs={12} >
                        <Grid container >
                            <Grid item xs={12} sx={{ marginY: '12px', textAlign: { xs: '', sm: 'right' } }}>
                                <Typography sx={{ fontSize: { xs: '32px', sm: '48px' }, fontWeight: '1000', fontFamily: "Source Sans 3", color: '#e8f1fa', textShadow: '8px 8px 6px #030303' }}>
                                    PUBLICATION
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} sx={{ marginY: '12px', textAlign: 'justify' }}>
                                {publication.map((p) => (
                                    <List key={p.id} >
                                        <ListItem sx={{ marginBottom: "8px" }}>
                                            <ListItemIcon sx={{alignSelf:'start', paddingTop:'12px'}} >
                                                <Circle sx={{ color: '#b9c0c8', fontSize: '20px' }} />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography sx={{ fontFamily: "Roboto Condensed", color: '#b9c0c8', marginBottom: "16px", fontSize: '20px' }}>
                                                    {p.details}
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                ))}
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={{ marginTop: '20px', paddingX: '30px', border: '0.1px solid #151517', boxShadow: "8px 6px 4px #030303" }}>
                    <Grid item xs={12} >
                        <Grid container >
                            <Grid item xs={12} sx={{ marginY: '12px', textAlign: 'left' }}>
                                <Typography sx={{ fontSize: { xs: '32px', sm: '48px' }, fontWeight: '1000', fontFamily: "Source Sans 3", color: '#e8f1fa', textShadow: '8px 8px 6px #030303' }}>
                                    CERTIFICATION
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} sx={{ marginY: '12px', textAlign: 'justify' }}>

                                {certi.map((c) => (
                                    <List key={c.id} sx={{ fontFamily: "Roboto Condensed", color: '#b9c0c8', fontSize: '20px' }}>
                                        <ListItem sx={{ marginBottom: "8px" }}>
                                            <ListItemIcon sx={{ fontFamily: "Roboto Condensed", color: '#b9c0c8', fontSize: '20px' }}>
                                                <Typography sx={{ fontFamily: "Roboto Condensed", color: '#b9c0c8', fontSize: '20px' }}>
                                                    {c.id}.
                                                </Typography>
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography sx={{ fontFamily: "Roboto Condensed", color: '#b9c0c8', fontSize: '20px' }}>
                                                    {c.name}
                                                </Typography>

                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    );
}