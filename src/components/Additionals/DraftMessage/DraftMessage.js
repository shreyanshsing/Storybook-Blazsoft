import React, {useState} from 'react'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import {Typography,IconButton,List,ListItem,ListItemIcon,ListItemText,ListItemSecondaryAction} from "@material-ui/core";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import { useSelector } from "react-redux";
import { draftSelector } from './draftMessage.slice';


export default function DraftMessage({ setLabel, setMessage, setConfirmDelete, setChecked}) {
    const [expand,setExpand] = useState(false);
    const [itemId,setItemId] = useState('');
    const {draftMessages} = useSelector(draftSelector);

    const handleExpand = (id) => {
        itemId === id ? setItemId("") : setItemId(id);
        setExpand(!expand);
    }

    const editMessage=(id)=>{
        setMessage(draftMessages.filter(messages=> messages.id===id)[0].message);
        setLabel(draftMessages.filter(messages=>messages.id===id)[0].label);
        setChecked(true);
    }


    const messages= draftMessages.map(savedMessage=>{
       return <ListItem divider >
                                <ListItemIcon key={savedMessage.id}>
                                    <IconButton onClick={()=>handleExpand(savedMessage.id)}>
                                        {
                                            !expand ? <DoubleArrowRoundedIcon color="primary"/> : <ArrowDropDownRoundedIcon color="primary"/>
                                        }
                                    </IconButton>
                                </ListItemIcon>
                                <ListItemText primary={savedMessage.label} secondary={
                                    <Typography variant="caption" gutterBottom>Group - Student's, <br/>
                                    {
                                        itemId === savedMessage.id ? <p>Message - {savedMessage.message}</p> : null
                                    } </Typography>}/>
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <SendRoundedIcon color="primary"/>
                                    </IconButton>
                                    <IconButton onClick={()=>editMessage(savedMessage.id)}>
                                        <EditRoundedIcon color="primary" />
                                    </IconButton>
                                    <IconButton onClick={()=> setConfirmDelete(true)}>
                                        <DeleteOutlineRoundedIcon color="secondary" />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>

    })

    return (
        
        <div>
            <Typography variant="subtitle1" gutterBottom>Choose from saved notifications - </Typography>
                            <List>
                                {messages}
                            </List>
            
        </div>
    )
}
