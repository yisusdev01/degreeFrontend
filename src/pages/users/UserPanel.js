import { Link } from "react-router-dom";

///////////---------IMPORTED--COMPONENTS--PROJECT---------///////////
import { TableUsers } from "../../components/TableUsers/TableUsers";

export const UserPanel = () => {


    return (
        <div className="userPanel">
            <Link className="btnNew" to="/users/add">
                <i className="bi bi-plus-lg"></i>
                {" Nuevo Usuario"} 
            </Link>
            <input className="inputSearchUser" placeholder="Search..."/>
            <TableUsers/>
            <select className="selectTableUser">
                <option value={10}>10</option>
            </select>
        </div>
        
    )
}