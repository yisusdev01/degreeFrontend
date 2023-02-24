
 
export const NavTable = ({isActive, setIsActive}) => {


    return (
        <div className="navTableContainer">
            <div className={isActive ? 'itemNavTable active' : 'itemNavTable '} onClick={()=>{setIsActive(true)}}>
                Clientes
            </div>
            <div className={isActive?'itemNavTable':'itemNavTable active'} onClick={()=>{setIsActive(false)}}>
                Empleados
            </div>
        </div>
    )
}