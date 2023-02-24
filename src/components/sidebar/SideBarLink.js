///////////---------------IMPORTED--PACKAGE---------------///////////
import { Link } from "react-router-dom"

export const SideBarLink = ({name,path,icon}) => {
    return (
        <li>
            <Link to={path} >
               <i className={icon}></i>
                <span className="linkName">{name}</span>
            </Link>
            <span className="toolTip">{name}</span>
        </li>
    )
}