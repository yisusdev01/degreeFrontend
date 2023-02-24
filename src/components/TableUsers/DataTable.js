import { useSelector } from "react-redux";

import { RowTable } from "./RowTable"

import {selectAllUsersClient} from '../../store/slice/usersClientSlice';
import {selectAllUsersEmployee} from '../../store/slice/usersEmployeeSlice';

 
export const Datatable = ({isActive}) => {

    const usersDataClient = useSelector(selectAllUsersClient);
    const usersDataEmployee = useSelector(selectAllUsersEmployee);
    
    const data = isActive ? usersDataClient : usersDataEmployee;

    return (
            data.map((item, index)=>
                <RowTable key={index} index={index} data={item} isActive={isActive} />
            )
    )
}