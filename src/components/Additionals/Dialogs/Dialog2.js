import React,{useState} from "react";
import { Container,Dialog,DialogTitle,DialogContent,makeStyles,IconButton,Typography,TextField,Button,Divider, DialogActions,Collapse,Box,MenuItem,Checkbox } from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';
import { selectorTeacher,setTeacherList,setSelectedTeacher,fetchTeacherData, selectorTeachers} from "../AutoComplete/redux/autocomplete.slice";
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "../AutoComplete/AutoCompelete";
import { addGroup } from "../../Announcement/redux/page1.slice";
import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';

const styles = makeStyles((theme)=>({
    root:{
        padding:'1rem'
    },
    flex:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    filter:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    }
}))

const Dialog2 = ({open,setOpen,data}) => {
    const classes = styles();
    const [label,setLabel] = useState(data ? data.label : '');
    const selectedList = useSelector(selectorTeachers);
    const dispatch = useDispatch();
    const [collapse,setCollapse] = useState(false);
    const [isSelected,setIsSelected] = useState(false);
    const [selectedClass,setSelectedClass] = useState([]);
    const [selectedSection,setSelectedSection] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            label : label,
            recipients : selectedList
        }
        dispatch(addGroup(data));
    }

    const handleSectionChange = (event) => {
        setSelectedSection(event.target.value);
    };
    const handleClassChange = (event) => {
        setSelectedClass(event.target.value);
    };
    

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
                        {data ? "Update Group" : "Create Group"} 
                    </Typography>
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            type="text"
                            variant="outlined"
                            InputLabelProps={{
                                shrink:true
                            }}
                            value={label}
                            onChange={(e)=>setLabel(e.target.value)}
                            label="Group Label"
                            fullWidth
                            margin="dense"
                        />
                        <Divider/>
                        <Typography variant="body1" gutterBottom>
                            Select from Teacher's List - 
                            <Searchbar defaultValue={data ? data.recipients : null} disabled={isSelected} selector={selectorTeacher} updateFunction={setTeacherList} fetchFunction={fetchTeacherData} setSelectedArray={setSelectedTeacher}/>
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Select from Student's List -<br/>
                            <Button type="button" color="secondary" disabled={isSelected} variant="text" onClick={()=>setCollapse(!collapse)} startIcon={<FilterListTwoToneIcon/>}>Filter</Button>
                            <Collapse in={collapse}>
                                <Box className={classes.filter}>
                                    <TextField
                                        select
                                        variant="outlined"
                                        margin="dense"
                                        label="Class"
                                        style={{minWidth:'10ch'}}
                                        SelectProps={{
                                            multiple: true,
                                            value : selectedClass,
                                            onChange : handleClassChange
                                        }}
                                    >
                                        <MenuItem value="First">First</MenuItem>
                                        <MenuItem value="Second">Second</MenuItem>
                                        <MenuItem value="Third">Third</MenuItem>
                                    </TextField>
                                    <TextField
                                        select
                                        variant="outlined"
                                        margin="dense"
                                        label="Section"
                                        style={{minWidth:'10ch'}}
                                        SelectProps={{
                                            multiple: true,
                                            value: selectedSection,
                                            onChange : handleSectionChange
                                        }}
                                    >
                                        <MenuItem value="First">A</MenuItem>
                                        <MenuItem value="Second">B</MenuItem>
                                        <MenuItem value="Third">C</MenuItem>
                                    </TextField>
                                    <div>
                                        <Button type="button" variant="text" color="secondary" size="small">remove</Button>
                                        <Button type="button" variant="text" color="primary" size="small">Apply</Button>
                                    </div>
                                </Box>
                            </Collapse>
                            <Searchbar disabled={isSelected} defaultValue={data ? data.recipients : null} selector={selectorTeacher} updateFunction={setTeacherList} fetchFunction={fetchTeacherData} setSelectedArray={setSelectedTeacher}/>
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <Checkbox checked={isSelected} onClick={()=>setIsSelected(!isSelected)}/> Select everyone in School.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button type="reset" variant="text" color="primary">Reset</Button>
                        <Button type="submit" variant="contained" color="primary">Create</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Container>
    )
}

export default Dialog2;