///////////---------------IMPORTED--PACKAGE---------------///////////
import { Outlet } from "react-router-dom";
import { BackgroundAuth } from "../../assets/images/authentication/BackgroundAuth";

///////////---------IMPORTED--COMPONENTS--PROJECT---------///////////
import { Navbar } from "../../components/navbar/NavBar";
import { SideBar } from "../../components/sidebar/SideBar";
import { Body } from "./Body";

///////////----------IMPORTED--STYLES--PROJECT----------///////////
import './Root.css';



export const Root = () => {
    return(
        <>
            <BackgroundAuth/>
            <SideBar/>
            <Navbar/>
            <Body>
                <Outlet/>
            </Body>
        </>
        
    )
}