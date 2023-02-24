///////////---------IMPORTED--COMPONENTS--PROJECT---------///////////
import { SideBarLink } from "./SideBarLink"

export const SideBarList = () => {
    return (
        <ul className="navList">
            <SideBarLink name='Login' path='/login' icon="bi bi-key-fill"/>
            <SideBarLink name='Users' path='/users' icon="bi bi-person-bounding-box"/>
            <SideBarLink name='Back-up' path='/backup' icon="bi bi-server"/>
            <SideBarLink name='Reports' path='/reports' icon="bi bi-stack"/>
            <SideBarLink name='Tasks' path='/tasks' icon="bi bi-box"/>
        </ul>
    )
}