///////////---------------IMPORTED--PACKAGE---------------///////////
import { useState } from "react";

///////////---------IMPORTED--COMPONENTS--PROJECT---------///////////
import { SideBarHeader } from "./SideBarHeader";
import { SideBarList } from "./SideBarList";
import { SideBarFooter } from "./SideBarFooter";

///////////----------IMPORTED--STYLES--PROJECT----------///////////
import './sideBar.css';



export const SideBar = () => {

    const [openSide, setOpenSide] = useState(false);

    const handleSide = () => {
        setOpenSide(!openSide);
    }

    return (
        <div className={!openSide?'sidebar':'sidebar open'}>
            <SideBarHeader openSide={openSide} handleSide={handleSide}/>
            <SideBarList/>
            <SideBarFooter/>
        </div>
    )
}