import React, { useState } from "react";
import { Drawer,List,ListItem,Container,IconButton,AppBar,Toolbar,makeStyles,Typography } from "@material-ui/core";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        padding:'0.5rem',
    },
    toolbar:{
        display:'flex',
        justifyContent:'space-between',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      paddingTop:'1.5rem'
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
}));

const Sidebar = () => {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const history = useHistory();

    return(
        <Container maxWidth="xl" className={classes.root}>
            <AppBar position="fixed" className={classes.appBar} color="secondary">
                <Toolbar className={classes.toolbar}>
                    <IconButton onClick={()=>setOpen(!open)}>
                        {
                            !open ? <MenuRoundedIcon color="primary" fontSize="large"/> : <ClearRoundedIcon color="primary" fontSize="large"/>
                        }
                    </IconButton>
                    <Typography variant="h4" style={{color:'whitesmoke'}}>Blazsoft Storybook</Typography>
                    <Typography variant="caption" style={{color:'whitesmoke'}}>use sidebar to navigate</Typography>
                </Toolbar>
            </AppBar>
            <Drawer 
                open={open}
                anchor="left"
                variant="persistent"
                className={classes.drawer}
                classes={{
                paper: classes.drawerPaper,
                }}>
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            <ListItem divider>
                                <TreeView
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    >
                                    <TreeItem nodeId="1" label="Announcement">
                                        <TreeItem nodeId="2" label="Page 1" onClick={()=>history.push("/announcement-page-1")}/>
                                        <TreeItem nodeId="3" label="Page 2" onClick={()=>history.push("/announcement-page-2")}/>
                                        <TreeItem nodeId="4" label="Page 3" onClick={()=>history.push("/announcement-page-3")}/>
                                    </TreeItem>
                                    <TreeItem nodeId="5" label="Classes">
                                    <TreeItem nodeId="6" label="Page 1" onClick={()=>history.push("/class")}/>
                                    </TreeItem>
                                    <TreeItem nodeId="7" label="Notification">
                                    <TreeItem nodeId="8" label="Page 1" onClick={()=>history.push("/class")}/>
                                    <TreeItem nodeId="9" label="Page 2" onClick={()=>history.push("/notif")}/>
                                    </TreeItem>
                                </TreeView>
                            </ListItem>
                        </List>
                    </div>
            </Drawer>
        </Container>
    )
}

export default Sidebar;