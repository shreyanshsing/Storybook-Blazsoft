import React from 'react'
import { Dialog, Typography, IconButton, makeStyles, Button } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from "@material-ui/icons/Close";
import { InputAdornment, FilledInput } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import { DialogActions } from '@material-ui/core';

export default function LinkComponent({text, setText, open, setOpen}) {

    const useStyles = makeStyles(theme => ({
        closeButton: {
            color: theme.palette.grey[700],
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(1),
        }
    }));

    const styles= useStyles();
    const handleClose = () => {
        setOpen(false);
    };
    const linkify=()=>{
        console.log(text);
        let range = text.getRangeAt(0);
        let span = React.createElement('span');
        range.surroundContents(span);
    }
    return (
        <div >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle>
                    <Typography variant="subtitle2" gutterBottom>
                       Link To
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
                    <div>
                    <FilledInput 
                    variant="outlined"
                    startAdornment={<InputAdornment position="start"><LinkIcon/></InputAdornment>}
                    type="text"/>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="secondary" onClick={()=>linkify()}> INSERT</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
