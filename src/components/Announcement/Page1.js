import React from "react";
import {Container,Typography,Grid,makeStyles,TextField,Button,IconButton,MenuItem,Checkbox,Divider} from "@material-ui/core";
import { useState } from "react";

const styles = makeStyles((theme)=>({
    root:{
        padding:'1.5rem',
        marginTop:'1rem',
    },
    flex:{
        display:'flex',
        justifyContent:'flex-start',
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
                <Grid item sm={8}>
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Typography variant="subtitle1" gutterBottom>Create new announcement / notitfication - </Typography>
                        </Grid>
                        <Grid item sm={5} className={classes.flex}>
                            <Typography variant="body1" component="span" gutterBottom>Select audience - &nbsp;</Typography>
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
                            <Typography variant="subtitle1" gutterBottom>Message - &nbsp;</Typography>
                            <TextField
                                fullWidth
                                required
                                multiline
                                rows={6}
                                variant="outlined"
                                margin="dense"
                                placeholder="write here"
                            />
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
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={12}>
                    <Divider orientation="vertical"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Page1;