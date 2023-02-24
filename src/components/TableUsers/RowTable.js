export const RowTable = ({index,data,isActive}) => {

    const classAlter = (index) => {
         return index%2===0 ? "rowTableItem text" : "rowTableItem text alter"
    }
 
    return(
        isActive ? 
            <div className="rowTableContainer active">
                <div className={classAlter(index)}>{data.nombre}</div>
                <div className={classAlter(index)}>{data.contraseña}</div>
                <div className={classAlter(index)}>{data.telefono}</div>
                <div className={classAlter(index)}>{data.direccion}</div>
                <div className={classAlter(index)}>{data.estado}</div>
                <div className={classAlter(index)}>{"Si"}</div>
            </div> 
        :
            <div className="rowTableContainer">
                <div className={classAlter(index)}>{data.nombre}</div>
                <div className={classAlter(index)}>{data.contraseña}</div>
                <div className={classAlter(index)}>{data.telefono}</div>
                <div className={classAlter(index)}>{data.area}</div>
                <div className={classAlter(index)}>{"Roles"}</div>
                <div className={classAlter(index)}>{data.estado}</div>
                <div className={classAlter(index)}>{"Si"}</div>
            </div>
    )
}