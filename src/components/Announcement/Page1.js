import React from "react";
import {Container,Typography,Grid,makeStyles,TextField,Button,IconButton,MenuItem,Checkbox,Divider,List,ListItem,ListItemIcon,ListItemText,ListItemSecondaryAction} from "@material-ui/core";
import { useState } from "react";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import Message from "../Additionals/Message/Message";
import AudioDialog from '../Additionals/AudioRecorder/AudioDialog'
import DraftMessage from "../Additionals/DraftMessage/DraftMessage";
import { useDispatch } from "react-redux";
import { saveMessage } from '../Additionals/DraftMessage/draftMessage.slice';
import DeleteAlert from '../Additionals/DraftMessage/delete'

const styles = makeStyles((theme)=>({
    root:{
        padding:'1.5rem',
        marginTop:'1rem',
        maxHeight:'100vh'
    },
    fixed:{
        position:'absolute',
        overflow:'scroll',
        overflowX:'hidden'
    },
    flex:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    flex1:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    btn:{
        marginLeft:"10px",
        marginRight : "10px"
    }
}))

const Page1 = () => {
    const classes = styles();
    const [checked,setChecked] = useState(false);
    const [audio, setAudio] = React.useState(false);
    const [message, setMessage]= useState("");
    const [label, setLabel]= useState("");
    const [confirmDelete, setConfirmDelete] = useState(false);
    const dispatch = useDispatch();

    const send=()=>{
        const data={
            "id": label, "label":label, "message": message
        }
        if(checked===true){
            dispatch(saveMessage(data));
        }
        
    }

    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item lg={12}></Grid>
                <Grid item lg={12}></Grid>
                <Grid item lg={12} style={{textAlign:'center'}}>
                    <Typography variant="h5" gutterBottom>
                        <i>Notifications & Announcements</i>
                    </Typography>
                </Grid>
                <Grid item sm={7}>
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Typography variant="subtitle1" gutterBottom>Create new announcement / notitfication - </Typography>
                        </Grid>
                        <Grid item sm={5} className={classes.flex}>
                            <Typography variant="body1" component="span" gutterBottom>Select Group - &nbsp;</Typography>
                            <TextField
                                select
                                variant="outlined"
                                margin="dense"
                                required
                                label=" For ">
                                    <MenuItem value = "ALL">All</MenuItem>
                                    <MenuItem value = "TEACHER">Teachers</MenuItem>
                                    <MenuItem value = "STUDENT">Students</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item sm={5} className={classes.flex}>
                            <Typography variant="subtitle1" gutterBottom>Title / Label - &nbsp;</Typography>
                            <TextField
                               variant="outlined"
                               margin="dense"
                               placeholder="optional"
                               value={label}
                               onChange={(e)=>setLabel(e.target.value)}
                            />
                        </Grid>
                        <Grid item sm={10}>
                            <Message audio={audio} setAudio={setAudio} message={message} setMessage={setMessage}/>
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant="caption" gutterBottom>
                                <Checkbox
                                    checked={checked}
                                    onClick={()=>setChecked(!checked)}
                                    color="secondary"
                                />
                                Save this as a draft.
                            </Typography>
                        </Grid>
                        <Grid item sm={12} className={classes.flex}>
                            <Button color="primary" type="reset" variant="text" size="large" className={classes.btn}>Clear</Button>
                            <Button color="primary" type="submit" variant="contained" size="large" onClick={()=>send()} className={classes.btn}>Notify</Button>
                        </Grid>
                        <Grid item sm={10}>
                            <Divider/>
                        </Grid>
                        <Grid item sm={10} style={{textAlign:'center'}}>
                            <Typography variant="h6" component="b" gutterBottom>OR</Typography>
                        </Grid>
                        <Grid item sm={10}>
                            <DraftMessage  setChecked={setChecked} setLabel={setLabel} setMessage={setMessage} setConfirmDelete={setConfirmDelete}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={1}>
                    <Divider orientation="vertical"/>
                </Grid>
                <Grid item sm={4}>
                    <Grid container spacing={3}>
                        <Grid item sm={12} className={classes.flex1}>
                            <Typography variant="subtitle1" component="span" gutterBottom>Groups - </Typography>
                            <Button color="primary" type="submit" variant="contained" size="large" className={classes.btn}>New Group</Button>
                        </Grid>
                        <Grid item sm={12}>
                            <List>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Checkbox/>
                                    </ListItemIcon>
                                    <ListItemText primary="All" secondary="Recipients - Admin, Ram, Saloni, Pavan...."/>
                                    <ListItemSecondaryAction>
                                        <IconButton>
                                            <EditRoundedIcon color="primary"/>
                                        </IconButton>
                                        <IconButton>
                                            <DeleteOutlineRoundedIcon color="secondary"/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Checkbox/>
                                    </ListItemIcon>
                                    <ListItemText primary="Student's Group" secondary="Recipients - Admin, Ram, Saloni, Pavan...."/>
                                    <ListItemSecondaryAction>
                                        <IconButton>
                                            <EditRoundedIcon color="primary"/>
                                        </IconButton>
                                        <IconButton>
                                            <DeleteOutlineRoundedIcon color="secondary"/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Checkbox/>
                                    </ListItemIcon>
                                    <ListItemText primary="Teacher's Group" secondary="Recipients - Admin, Ram, Saloni, Pavan...."/>
                                    <ListItemSecondaryAction>
                                        <IconButton>
                                            <EditRoundedIcon color="primary"/>
                                        </IconButton>
                                        <IconButton>
                                            <DeleteOutlineRoundedIcon color="secondary"/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
                {audio && <AudioDialog open={audio} setOpen={setAudio} />}
                {confirmDelete && <DeleteAlert open={confirmDelete} setOpen={setConfirmDelete} > </DeleteAlert> }

            </Grid>
            
        </Container>
    )
}

export default Page1;