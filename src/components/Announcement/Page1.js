import React from "react";
import {Container,Typography,Grid,makeStyles,TextField,Button,Checkbox,Divider,List} from "@material-ui/core";
import { useState } from "react";
import Message from "../Additionals/Message/Message";
import AudioDialog from '../Additionals/AudioRecorder/AudioDialog'
import Dialog2 from "../Additionals/Dialogs/Dialog2";
import { useSelector } from "react-redux";
import { groupSelector } from "./redux/page1.slice";
import Group from "../Additionals/Group/Group";
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
    const [openGroup,setOpenGroup] = useState(false);
    const groups = useSelector(groupSelector);
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
                            <Button color="primary" type="submit" variant="contained" size="large" onClick={()=>setOpenGroup(true)} className={classes.btn}>New Group</Button>
                        </Grid>
                        <Grid item sm={12}>
                            <List>
                                {
                                    groups.length > 0 && groups.map(item => <Group data={item}/>)
                                }
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
                {audio && <AudioDialog open={audio} setOpen={setAudio} />}
                {openGroup ? <Dialog2 open={openGroup} setOpen={setOpenGroup}/> : null}
                {confirmDelete && <DeleteAlert open={confirmDelete} setOpen={setConfirmDelete} > </DeleteAlert> }
            </Grid>
            
        </Container>
    )
}

export default Page1;