import { useState } from 'react';

///////////---------IMPORTED--COMPONENTS--PROJECT---------///////////
import { NavTable } from './NavTable';
import { Table } from './Table';

///////////----------IMPORTED--STYLES--PROJECT----------///////////
import './tableUsers.css';


export const TableUsers = () => {
    
    const [isActive, setIsActive] = useState(true);


    return (
        <div className="tableUsers">
            <NavTable isActive={isActive} setIsActive={setIsActive}/>
            <Table isActive={isActive}/>
        </div>
    )
}