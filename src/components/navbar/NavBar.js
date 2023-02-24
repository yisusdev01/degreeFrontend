///////////---------------IMPORTED--PACKAGE---------------///////////
import { useState } from 'react';
import { Link } from 'react-router-dom';

///////////---------IMPORTED--COMPONENTS--PROJECT---------///////////
import { ModalContainer } from '../ModalContainer/ModalContainer';

///////////----------IMPORTED--STYLES--PROJECT----------///////////
import './navBar.css';



export const Navbar = () => {

    const [statusModalUser, setStatusModalUser] = useState(false);

    const openModalUser = () => {
        setStatusModalUser(!statusModalUser);
    }

    return (
        <>
            <div className="navBar">
                <i className="bi bi-search icon"/>
                <h4 style={{"fontWeight":"bolder", "color":"rgb(45, 66, 185)"}}>Imprenta Universitaria - UATF</h4>
                <div className="userSection">
                    <i className="bi bi-bell iconBell"></i>
                    <i className="bi bi-person-circle iconUser" onClick={openModalUser}></i>
                </div>
            </div>
            {
                statusModalUser&&
                <ModalContainer toogleModal={openModalUser}>
                    <div className='ContainerMenuUser' >
                        <h6 >UserAccount<hr/></h6> 
                        <span className='menuUser'>
                            <Link className='itemMenuUser'>Home</Link>
                            <Link className='itemMenuUser'>Account</Link>
                            <Link className='itemMenuUser'>Settings</Link>    
                        </span>   
                        <h6><hr/>logout</h6>                  
                    </div>
                </ModalContainer>
            }
        </>
    )
}