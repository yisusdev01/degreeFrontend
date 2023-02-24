import { Datatable } from "./DataTable"
import { TittleTable } from "./TittleTable"
 
export const Table = ({isActive}) => {


    return (
        <div className="tableContainer">
            <TittleTable isActive={isActive}/>
            <Datatable isActive={isActive} />
        </div>
    )
}