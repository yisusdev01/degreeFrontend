import { Box, Grid } from "@mui/material";
import { BackgroundAuth } from "../../assets/images/authentication/BackgroundAuth";
import logouatf from '../../assets/images/uatf.png';
import { LogoDisu } from "../../components/LogoDisu";
import { CardAuth } from "./CardAuth";

export const WhrapperAuth = ({children}) => {
    return(
        <Box sx = {{ minHeight:'100vh' }}>
            <BackgroundAuth/>
            <Grid container direction='column' justifyContent="flex-start" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
                    <LogoDisu/>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12} container justifyContent="center" alignItems="center"  sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}>
                        <Grid item>
                            <CardAuth>{children}</CardAuth>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}