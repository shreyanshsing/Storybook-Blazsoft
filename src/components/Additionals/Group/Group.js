import React, {useState} from "react";
import { ListItem,ListItemIcon,ListItemText,ListItemSecondaryAction,IconButton,Checkbox } from "@material-ui/core"
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import Dialog2 from "../Dialogs/Dialog2";

const Group = ({data}) => {
    const [open,setOpen] = useState(false);
    const [item,setItem] = useState({});
    const handleOpen = () => {
        setOpen(true);
        setItem(data);
    }
    return(
        <>
        <ListItem divider>
            <ListItemIcon>
                <Checkbox/>
            </ListItemIcon>
            <ListItemText primary={data.label} secondary={`Recipients - ${data.recipients.map(item => item.firstName)}`}/>
            <ListItemSecondaryAction>
                <IconButton>
                    <EditRoundedIcon onClick={handleOpen} color="primary"/>
                </IconButton>
                <IconButton>
                    <DeleteOutlineRoundedIcon color="secondary"/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        {
            open ? <Dialog2 open={open} setOpen={setOpen} data={item}/> : null
        }
        </>
    )
}

export default Group;