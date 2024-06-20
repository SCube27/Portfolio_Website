import { Grid, Typography } from "@mui/material";
import languages from '../assets/icons/languages.svg'
import c from '../assets/icons/c.svg'
import js from '../assets/icons/javascript.svg'
import ts from '../assets/icons/typescript.svg'
import py from '../assets/icons/python1.png'
import html from '../assets/icons/html.svg'
import devops from '../assets/icons/devops.svg'
import docker from '../assets/icons/docker.svg'
import kubernetes from '../assets/icons/kubernets.svg'
import backend from '../assets/icons/backend.svg'
import nodejs from '../assets/icons/nodejs.svg'
import express from '../assets/icons/express.svg'
import fastify from '../assets/icons/fastify.svg'
import mysql from '../assets/icons/mysql.svg'
import redis from '../assets/icons/redis.svg'
import kafka from '../assets/icons/kafka.svg'
import rmq from '../assets/icons/rabbitmq.svg'
import mongodb from '../assets/icons/mongodb.svg'
import db from '../assets/icons/db.svg'
import { Terminal } from "@mui/icons-material";
import terminal from '../assets/icons/terminal.svg'
import git from '../assets/icons/git.svg'
import bash from '../assets/icons/bash.svg'

export default function Skills() {
    return (
        <Grid container sx={{}}>
            <Grid item xs={12} sx={{}}>
                <Grid container>
                    <Grid item xs={12} sx={{ marginY: '12px', textAlign: 'center' }}>
                        <Typography sx={{ fontSize: {xs: '44px' ,sm:'64px'}, fontWeight: '1000', fontFamily: "Source Sans 3", WebkitTextStrokeWidth: '2px', color: '#232427', WebkitTextStrokeColor: '#fffdf7' }}>
                            SKILLS
                        </Typography>
                        <Typography sx={{ fontSize: {xs: '44px' ,sm:'64px'}, marginTop: {xs: '-71px' ,sm:'-100px'}, marginLeft: '6px', fontWeight: '1000', fontFamily: "Source Sans 3", color: '#ecf3fb' }}>
                            SKILLS
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container sx={{ padding: '20px', textAlign: 'center', color: '#ecf3fb', display: 'flex', justifyContent: 'space-between' }}>
                    <Grid item xs={12} lg={5.5} sx={{ width: '100%', border: '2px solid #151517', boxShadow: "6px 4px 4px #030303", padding: '10px', marginX: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: '8px' }}>
                            <img src={languages} style={{ maxWidth: '100%', height: 'auto' }} />
                            <Typography sx={{ fontSize: { xs: '20px', sm: '28px' }, fontWeight: '900', color: '#ecf3fb', alignSelf: 'center', marginLeft: '8px' }}>
                                Languages
                            </Typography>
                        </div>
                        <Grid container spacing={2} sx={{ padding: '20px', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Grid item xs={6} sm={4} md={2} sx={{ marginBottom: { xs: '20px', sm: '10px', md: '0px' } }}>
                                <img src={c} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                            <Grid item xs={6} sm={4} md={2} sx={{ marginBottom: { xs: '20px', sm: '10px', md: '0px' } }}>
                                <img src={js} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                            <Grid item xs={6} sm={4} md={2} sx={{ marginBottom: { xs: '20px', sm: '10px', md: '0px' } }}>
                                <img src={ts} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                            <Grid item xs={6} sm={4} md={2} sx={{ height: '64px', width: '64px', marginBottom: { xs: '20px', sm: '10px', md: '0px' } }}>
                                <img src={py} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                            <Grid item xs={12} sm={4} md={2} sx={{ marginBottom: { xs: '20px', sm: '10px', md: '0px' } }}>
                                <img src={html} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} lg={5.5} sx={{ width: '100%', marginTop: { xs: '40px', lg: '0px' }, border: '2px solid #151517', boxShadow: "6px 4px 4px #030303", padding: '10px', marginX: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: '8px' }}>
                            <img src={backend} style={{ maxWidth: '100%', height: 'auto' }} />
                            <Typography sx={{ fontSize: { xs: '20px', sm: '28px' }, fontWeight: '900', color: '#ecf3fb', alignSelf: 'center', marginLeft: '8px' }}>
                                Backend Technologies
                            </Typography>
                        </div>
                        <Grid container spacing={2} sx={{ padding: '20px', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Grid item xs={6} sm={4} md={2} sx={{ marginBottom: { xs: '20px', sm: '10px', md: '0px' } }}>
                                <img src={nodejs} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                            <Grid item xs={6} sm={4} md={2} sx={{ marginBottom: { xs: '20px', sm: '10px', md: '0px' } }}>
                                <img src={express} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                            <Grid item xs={12} sm={4} md={2} sx={{ marginBottom: { xs: '20px', sm: '10px', md: '0px' } }}>
                                <img src={fastify} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid container sx={{ padding: '20px', textAlign: 'center', color: '#ecf3fb', display: 'flex', justifyContent: 'space-between' }}>
                    <Grid item xs={12} sx={{ width: '100%', marginTop: { xs: '0px', lg: '0px' }, border: '2px solid #151517', boxShadow: "6px 4px 4px #030303", padding: '10px', marginX: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: '8px' }}>
                            <img src={db} style={{ maxWidth: '100%', height: 'auto' }} />
                            <Typography sx={{ fontSize: { xs: '20px', sm: '28px' }, fontWeight: '900', color: '#ecf3fb', alignSelf: 'center', marginLeft: '8px' }}>
                                Databases & Caches
                            </Typography>
                        </div>
                        <Grid container spacing={2} sx={{ padding: '20px', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Grid item xs={6} sm={4} md={2} sx={{ marginBottom: { xs: '20px', sm: '10px', md: '0px' } }}>
                                <img src={mysql} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                            <Grid item xs={6} sm={4} md={2} sx={{ marginBottom: { xs: '20px', sm: '10px', md: '0px' } }}>
                                <img src={mongodb} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                            <Grid item xs={6} sm={4} md={2} sx={{ marginBottom: { xs: '20px', sm: '10px', md: '0px' } }}>
                                <img src={rmq} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                            <Grid item xs={6} sm={4} md={2} sx={{ height: '64px', width: '64px', marginBottom: { xs: '20px', sm: '10px', md: '0px' } }}>
                                <img src={redis} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                            <Grid item xs={12} sm={4} md={2} sx={{ marginBottom: { xs: '20px', sm: '10px', md: '0px' } }}>
                                <img src={kafka} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={{ padding: '20px', textAlign: 'center', color: '#ecf3fb', display: 'flex', justifyContent: 'space-between' }}>
                    <Grid item xs={12} lg={5.5} sx={{ width: '100%', border: '2px solid #151517', boxShadow: "6px 4px 4px #030303", padding: '10px', marginX: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: '8px' }}>
                            <img src={devops} style={{ maxWidth: '100%', height: 'auto' }} />
                            <Typography sx={{ fontSize: { xs: '20px', sm: '28px' }, fontWeight: '900', color: '#ecf3fb', alignSelf: 'center', marginLeft: '8px' }}>
                                Devops
                            </Typography>
                        </div>
                        <Grid container spacing={2} sx={{ padding: '20px', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Grid item xs={6}>
                                <img src={docker} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={kubernetes} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} lg={5.5} sx={{ width: '100%', border: '2px solid #151517', marginTop: { xs: '40px', lg: '0px' }, boxShadow: "6px 4px 4px #030303", padding: '10px', marginX: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: '8px' }}>
                            <img src={terminal} style={{ maxWidth: '100%', height: 'auto' }} />
                            <Typography sx={{ fontSize: { xs: '20px', sm: '28px' }, fontWeight: '900', color: '#ecf3fb', alignSelf: 'center', marginLeft: '8px' }}>
                                VCS
                            </Typography>
                        </div>
                        <Grid container spacing={2} sx={{ padding: '20px', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Grid item xs={6} >
                                <img src={git} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                            <Grid item xs={6} >
                                <img src={bash} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </Grid>
    );
}