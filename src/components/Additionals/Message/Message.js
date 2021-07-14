import React from "react";
import { TextField, makeStyles, Typography } from "@material-ui/core";
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import ImageIcon from '@material-ui/icons/Image';
import VideocamIcon from '@material-ui/icons/Videocam';
import MicIcon from '@material-ui/icons/Mic';
import LinkIcon from '@material-ui/icons/Link';
import Dialog1 from "../Dialogs/Dialog1";
import Dialog3 from "../Dialogs/Dialog3";

const styles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        width: '100%',
        height: 'auto',
        overflow: 'hidden'
    },
    btn: {
        position: 'absolute',
        paddingRight: '1rem',
        bottom: '10px',
        right: '0px'
    },
}));

const Message = ({ setAudio}) => {
    const classes = styles();
    const [open, setOpen] = React.useState(false);
    const [openPlayer,setOpenPlayer] = React.useState(false);
    const [openLink,setOpenLink] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const startAudioRecording = () => {
        setAudio(true);
    }
    const handleClick = (key) => {
        if(key === "Video"){
            setOpenPlayer(true);
        }
        if(key === "Link"){
            setOpenLink(true);
        }
    }
    const actions = [
        { icon: <ImageIcon color="primary" fontSize="small" />, name: 'Image' },
        { icon: <VideocamIcon color="primary" fontSize="small" />, name: 'Video' },
        { icon: <MicIcon onClick={() => startAudioRecording()} color="primary" fontSize="small" />, name: 'Audio' },
        { icon: <LinkIcon color="primary" fontSize="small" />, name: 'Link' },
    ];
    return (
        <>
        <div className={classes.root}>
            <Typography variant="subtitle1" gutterBottom>Message - &nbsp;</Typography>
            <SpeedDial
                className={classes.btn}
                ariaLabel="SpeedDial openIcon example"
                icon={<SpeedDialIcon openIcon={<EditIcon fontSize="small" />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction="left"
            >
                {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onMouseDown={()=>handleClick(action.name)}
                />
                ))}
            </SpeedDial>
            <TextField
                fullWidth
                required
                multiline
                rows={12}
                variant="outlined"
                margin="dense"
                placeholder="write here"
            />
            {
                openPlayer ? <Dialog1 open={openPlayer} setOpen={setOpenPlayer}/> : null
            }
            {
                openLink ? <Dialog3 open={openLink} setOpen={setOpenLink}/> : null
            }
        </div>
        </>
    )
}

export default Message;