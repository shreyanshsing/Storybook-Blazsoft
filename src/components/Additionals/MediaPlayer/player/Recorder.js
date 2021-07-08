import React,{useState,useEffect} from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import { Card,CardHeader,CardContent,CardActions,makeStyles,IconButton } from "@material-ui/core";
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';

const styles = makeStyles((theme)=>({
    root:{
        margin:'auto',
        background:theme.palette.info.main,
        backgroundClip:'padding',
        width:'fit-content',
        color:'whitesmoke'
    },
    base:{
        width:'100%',
    },
    video:{
        width:theme.spacing(45),
        height:theme.spacing(45),
    }
}));

const RecordView = () => {
    const [flag,setFlag] = useState('pause');
    const classes = styles();

    const handleToggle = (pauseRecording,resumeRecording) => {
        if(flag === "pause"){
            pauseRecording();
            setFlag("resume");
            return;
        }
        else{
            resumeRecording();
            setFlag("pause");
        }
    }

    return(
        <Card raised className={classes.root}>
             <ReactMediaRecorder
                video
                render={({ status, startRecording,resumeRecording,pauseRecording, stopRecording, mediaBlobUrl }) => (
                    <>
                    <CardHeader subheader={status}/>
                    <CardContent>
                        <video className={classes.video} src={mediaBlobUrl} controls autoplay />
                    </CardContent>
                    <CardActions style={{display:'flex',justifyContent:'space-around'}}> 
                        <IconButton onClick={startRecording}>
                            <PlayArrowRoundedIcon style={{color:'whitesmoke'}}/>
                            Start
                        </IconButton>
                        <IconButton disabled={status === "idle" || status === "stopped"} onClick={()=>handleToggle(pauseRecording,resumeRecording)}>
                            <PauseRoundedIcon style={{color:'whitesmoke'}}/>
                            {flag}
                        </IconButton>
                        <IconButton onClick={stopRecording}>
                            <StopRoundedIcon color="secondary"/>
                            Stop
                        </IconButton>
                    </CardActions>
                    </>
                    )}/>
        </Card>
    )
};

export default RecordView;