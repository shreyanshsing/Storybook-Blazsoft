import React from "react";
import {Container,Typography,Grid,makeStyles} from "@material-ui/core";

const Page3 = () => {
    return(
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid item lg={12}>
                    <Typography variant="h3" gutterBottom>
                        <i>Notifications & Annoucements</i>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Page3;