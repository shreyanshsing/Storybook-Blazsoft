import React,{useState} from "react";
import { Container,Dialog,DialogTitle,DialogContent,makeStyles,IconButton,Typography,TextField,Button, DialogActions } from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';

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

const Dialog3 = ({open,setOpen}) => {
    const classes = styles();
    const [link,setLink] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        /*var selectedtext = window.getSelection();
        var string = selectedtext.toString();
        const a = React.createElement('a', {href:link},string);*/
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
                        Link Insert 
                    </Typography>
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            type="text"
                            variant="outlined"
                            value={link}
                            onChange={(e)=>setLink(e.target.value)}
                            label="Link"
                            fullWidth
                            margin="dense"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button type="reset" variant="text" color="primary">Reset</Button>
                        <Button type="submit" variant="contained" color="primary">Apply</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Container>
    )
}

export default Dialog3;