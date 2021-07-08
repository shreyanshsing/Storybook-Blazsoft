import React from 'react';
import { Dialog, Typography, makeStyles, IconButton } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AudioRecorder2 from './AudioRecorder2';
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
    container: {
        margin: 'auto',
        padding: "3%",
        overflow:'hidden'
    },

    closeButton: {
        color: theme.palette.grey[700],
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
    },
    dialogContent:{
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(4),
    }
}));

export default function AudioDialog({ open, setOpen }) {
    const styles = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Dialog
                maxWidth="md"
                className={styles.container}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle>
                    <Typography variant="subtitle2" gutterBottom>
                        Record Your Message!
                    </Typography>
                    <IconButton
                        className={styles.closeButton}
                        size="large"
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent className={styles.dialogContent}>
                    <AudioRecorder2 />
                </DialogContent>
            </Dialog>
        </div>
    );
}
