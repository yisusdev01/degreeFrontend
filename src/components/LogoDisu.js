import { Link } from "react-router-dom";
import { ButtonBase } from "@mui/material";

import logoDisu from '../assets/images/disu.png'

export const LogoDisu = ({sx, to}) => {
    return (
        <ButtonBase disableRipple  component={Link} to={!to?"/":to} sx={sx}>
            <img style={{height:"7vh", width:"15vh"}} src={logoDisu}/>
        </ButtonBase>
    )
}