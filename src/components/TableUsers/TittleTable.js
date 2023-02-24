 
    
export const TittleTable = ({isActive}) => {

    const tittleClient= ["Nombre", "Contraseña", "Telefono", "Direccion", "Estado", "Editar"];
    const tittleEmploye = ["Nombre", "Contraseña", "Telefono", "Area", "Roles", "Estado", "Editar"];

    let title = isActive ? tittleClient:tittleEmploye;

    return (
        <div className={isActive?"rowTableContainer active":"rowTableContainer"}>
            {title.map((itemTittle,indexTittle)=>{
                return (
                    <div 
                        key={indexTittle}
                        className="rowTable"
                    >
                        <div  className="rowTableItem tittle">
                            {itemTittle}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}