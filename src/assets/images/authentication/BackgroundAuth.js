import {Box} from '@mui/material';
import logouatf from '../uatf.png';

export const BackgroundAuth = () => {
    return (
        <Box sx={{position: 'fixed',filter: 'blur(25px)' , zIndex: -1, bottom: 0, left:'80px'}}>
            <img style={{ width:"100%", height:"calc(100vh - 250px)",}} src={logouatf}/>
        </Box>
    )   
}