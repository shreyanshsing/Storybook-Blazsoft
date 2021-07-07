import React, { useEffect } from 'react';
import { useState } from 'react';
import { Grid, Typography, Button, Card, CardActions, CardContent } from '@material-ui/core';
import { makeStyles, Container } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import { classData } from './classData';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({

    container: {
        width: "83.5%",
        float: "right",
        overflow: "auto",
        overflowWrap: "break-word",
        padding: "3%",
        paddingTop: "3%",
        background: theme.palette.background.lightDark,
    },
    root: {
        borderRadius: '10px',
        marginBottom: '2px',
        width: '60%',
        marginLeft: '20%',
        //background:theme.palette.background.lightDark
    },
    accordianRoot: {
        width: '100%',
        margin: '0.5%',
        borderRadius: '20px',
        backgroundColor: "white",
        border: '2px solid #002C83'
    },
    accordianContent: {
        borderBottom: '1px solid grey',
    },
    deleteButton: {
        position: 'absolute',
        float: 'right',
        color: theme.palette.grey[500],
    },
    addButton: {
        position: 'relative',
        float: 'right',
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    paper: {
        height: '200px',
        width: '100px'
    },
    root2: {
        minWidth: 275,
        borderRadius: '20px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    addNotif:{
        float:'right'
    }

}));
export default function Class() {

    const styles = useStyles();
    const [notifDialog, setNotifDialog]= useState(false);

    const displayClasses = classData.map(classItem =>
        <Grid item sm={3} key={classItem._id}>
            <Card raised className={styles.root2} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                    CLASS {classItem.className}
                    </Typography>
                    <Typography className={styles.pos} color="textSecondary">
                    {classItem.sectionName}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {classItem.desc}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {classItem.incharge}
                    </Typography>
                </CardContent>
                <CardActions className={styles.addNotif}>
                    <Tooltip  title="Add Notification"><IconButton><AddAlertIcon></AddAlertIcon></IconButton></Tooltip>
                </CardActions>
            </Card>
        </Grid>)

    return (
        <Container className={styles.container}>
            <Grid container spacing={3}>
                <Grid item sm={9}>
                    <Typography variant="subtitle2" gutterBottom>Classes</Typography>
                </Grid>
                <Grid item sm={3}>
                    <Tooltip title='Add Class'>
                        <Button style={{marginTop:'4em'}} variant="contained" color="primary" >
                            Create<Add />
                        </Button>
                    </Tooltip>
                </Grid>
                <Grid item sm={12}>
                    {(classData.length === 0) ?
                        <div style={{ lineHeight: '80vh', marginLeft: '43vw' }}>No Classes to display</div>
                        :
                        <Grid container spacing={3}>
                            {
                                displayClasses
                            }
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Container>
    );
}