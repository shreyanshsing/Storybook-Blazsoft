import React,{useState} from "react";
import { Container,Dialog,DialogTitle,DialogContent,Box,makeStyles,IconButton,Typography,TextField,Button,InputAdornment,Divider } from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';
import Player from "../MediaPlayer/player/Player";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import VideoRecorder from "../MediaPlayer/player/Recorder";
const styles = makeStyles((theme)=>({
    root:{
        padding:'1rem'
    },
    flex:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    }
}))

const Dialog1 = ({open,setOpen}) => {
    const classes = styles();
    const [img,setImg] = useState('');
    const [err,setError] = useState(false);
    const [openPlayer,setOpenPlayer] = useState(false);
    const handleVideo = (event) => {
        var file = event.target.files[0];
        if(file.size > 5000000){
            setError(true);
            return;
        }
        setError(false);
        var reader = new FileReader();
        reader.onload = ()=>{
            setImg(reader.result);
        }
        reader.readAsDataURL(file);
    }

    const handlePreview = () => {
        setOpenPlayer(true);
    }

    const handleReset = () => {
        setOpenPlayer(false);
        setImg('');
    } 
    return(
        <Container className={classes.root}>
            <Dialog
                open={open}
                fullWidth
                maxWidth="sm">
                <DialogTitle className={classes.flex}>
                    <IconButton onClick={()=>setOpen(false)}>
                        <CancelIcon color="secondary"/>
                    </IconButton>
                    <Typography variant="h5" component="span" gutterBottom>
                        Announcements Media
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1" gutterBottom>
                        Select from device
                    </Typography>
                    <TextField
                        type="file"
                        accept=".mp4"
                        variant="outlined"
                        InputLabelProps={{
                            shrink:true
                        }}
                        error={err}
                        helperText={err ? "Max. file size allowed is 5 MB" : null}
                        onChange={(e)=>handleVideo(e)}
                        label="Select"
                        fullWidth
                        InputProps={{
                            endAdornment : 
                                <InputAdornment position="end">
                                    <IconButton onClick={handleReset}>
                                        <DeleteOutlineIcon color="secondary"/>
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                    <Box textAlign="center" style={{margin:'1rem'}}>
                        <Button variant="contained" type="button" color="primary" disabled={!img || img === ''} size="small">Upload</Button>
                        <Button variant="contained" type="button" color="secondary" disabled={!img || img === ''} onClick={handlePreview} size="small">Preview</Button>
                    </Box>
                    {
                        openPlayer ? <Player data={img}/> : null
                    }
                    <Divider/>
                    <Box textAlign="center">
                        <Typography variant="h6" gutterBottom>OR<br/> Record Here</Typography>
                        <VideoRecorder/>
                    </Box>
                </DialogContent>
            </Dialog>
        </Container>
    )
}

export default Dialog1;