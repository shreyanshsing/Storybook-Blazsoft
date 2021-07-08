import React from 'react';
import { Dialog, Typography, makeStyles, IconButton } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
//import { useTheme } from '@material-ui/core/styles';
import CloseIcon from "@material-ui/icons/Close";
import Trimmer from './Trimmer';



const useStyles = makeStyles(theme => ({
    container: {
        width: "700px",
        padding: "1%",
        paddingTop: "3%",
        overflowX: "hidden",
    },
    closeButton: {
        color: theme.palette.grey[700],
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
    },
}));

export default function AudioDialog({ open, setOpen }) {
    //const theme = useTheme();
    const styles = useStyles();
    //const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Dialog
                
                //fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle style={{ width: "100%" }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Audio message
                    </Typography>
                    <IconButton
                        className={styles.closeButton}
                        size="large"
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Trimmer/>
                </DialogContent>
            </Dialog>
        </div>
    );
}
