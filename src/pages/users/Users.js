///////////---------------IMPORTED--PACKAGE---------------///////////
import { Outlet } from "react-router-dom";

///////////---------IMPORTED--COMPONENTS--PROJECT---------///////////
import { Box } from "../../components/box/Box"
import { Location } from "../../components/location/Location"

///////////----------IMPORTED--STYLES--PROJECT----------///////////
import './user.css';


export const Users = () => {


    return(
        <>
            <Location/>
            <Box>
                <h3>Gestion de usuarios</h3>
                <Outlet/>
            </Box>
        </>
        
    )
}