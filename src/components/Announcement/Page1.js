import React from "react";
import {Container,Typography,Grid,makeStyles,TextField,Button,IconButton,MenuItem,Checkbox,Divider,List,ListItem,ListItemIcon,ListItemText,ListItemSecondaryAction} from "@material-ui/core";
import { useState } from "react";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import Message from "../Additionals/Message/Message";
import AudioDialog from '../Additionals/AudioRecorder/AudioDialog'

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
    const [itemId,setItemId] = useState('');
    const [expand,setExpand] = useState(false);
    const [audio, setAudio] = React.useState(false);

    const handleExpand = (id) => {
        itemId === id ? setItemId("") : setItemId("1");
        setExpand(!expand);
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
                            />
                        </Grid>
                        <Grid item sm={10}>
                            <Message audio={audio} setAudio={setAudio}/>
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
                            <Button color="primary" type="submit" variant="contained" size="large" className={classes.btn}>Notify</Button>
                        </Grid>
                        <Grid item sm={10}>
                            <Divider/>
                        </Grid>
                        <Grid item sm={10} style={{textAlign:'center'}}>
                            <Typography variant="h6" component="b" gutterBottom>OR</Typography>
                        </Grid>
                        <Grid item sm={10}>
                            <Typography variant="subtitle1" gutterBottom>Choose from saved notifications - </Typography>
                            <List>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <IconButton onClick={()=>handleExpand("1")}>
                                            {
                                                !expand ? <DoubleArrowRoundedIcon color="primary"/> : <ArrowDropDownRoundedIcon color="primary"/>
                                            }
                                        </IconButton>
                                    </ListItemIcon>
                                    <ListItemText primary="Fee Submission Deadline extended" secondary={
                                        <Typography variant="caption" gutterBottom>Group - Student's, <br/>
                                        {
                                            itemId === "1" ? <p>Message -  Dear Student's Deadline of submitting odd semester fees has been extended.</p> : null
                                        } </Typography>}/>
                                    <ListItemSecondaryAction>
                                        <IconButton>
                                            <SendRoundedIcon color="primary"/>
                                        </IconButton>
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
            </Grid>
            
        </Container>
    )
}

export default Page1;