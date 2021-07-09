import React from "react";
import { Card,CardContent,CardActions,makeStyles } from "@material-ui/core";

const styles = makeStyles((theme)=>({
    root:{
        margin:'auto',
        background:theme.palette.info.main,
        backgroundClip:'padding',
        width:'fit-content',
        color:'whitesmoke'
    },
    video:{
        widht:theme.spacing(30),
        height:theme.spacing(30),
    }
}))

const Player = ({data}) => {
    const classes = styles();
    return(
        <Card raised className={classes.root}>
            <CardContent>
                <video className={classes.video} controls>
                    <source src={data} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    )
}

export default Player;