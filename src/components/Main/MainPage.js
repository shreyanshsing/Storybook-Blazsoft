import React from "react";
import {Container,Typography,Grid,makeStyles} from "@material-ui/core";
import img from "./Img.png";

const style = makeStyles((theme)=>({
    root:{
        padding:'1.5rem',
        textAlign:'center'
    },
    imgCon:{
        width:'100%',
        height:'auto'
    },
    img:{
        width:'inherit',
        height:'auto',
    }
}))

const Page1 = () => {
    const classes = style();
    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item sm={12}></Grid>
                <Grid item sm={12}></Grid>
                <Grid item sm={12}></Grid>
                <Grid item sm={12}>
                    <Typography variant="h5" gutterBottom>
                        <i>Track current progress of designs</i><br/>
                        <small>when finalize then implement in production.</small>
                    </Typography>
                </Grid>
                <Grid item sm={3}></Grid>
                <Grid item sm={6} className={classes.imgCon}>
                    <img src={img} alt="pic" className={classes.img}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Page1;