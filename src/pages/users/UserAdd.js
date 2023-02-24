///////////---------------IMPORTED--PACKAGE---------------///////////
import { useState } from "react"
import { useDispatch } from "react-redux";

export const UserAdd = () => {

    const dispatcher = useDispatch();

    const initialFormClient = {
        nombre:"",
        contraseña:"",
        telefono:"",
        direccion:"",
        estado:"activo"
    }

    const [formClient, setFormClient] = useState(initialFormClient)

    const [toogleForm, setToogleForm] = useState(true);

    const handleToogle = ({target}) => {
        setToogleForm(!toogleForm);
        console.log(toogleForm);
    }
    const handleFormClient = ({target},key) => {
        const value = target.value;
        setFormClient({...formClient, [key]:value})
    }
    const handleclickUser = () => {
        const action = {
            type:"usersClient/addUser",
            payload: formClient
        }
        dispatcher(action);
        setFormClient(initialFormClient);
    }

    return (
        <div className="formAddContainer">
 
            <h3>Nuevo Usuario</h3>
            <div className="formUserType" onChange={handleToogle}>
                <input defaultChecked type="radio" name="userType" value={true}/><span>Cliente</span>
                <input type="radio" name="userType" value={false}/><span>Empleado</span>
            </div>
            {
                toogleForm?
                <div className="formUser">
                    <label>Nombre / Institucion :</label>
                    <input
                        value={formClient.nombre}
                        onChange={(e)=>{handleFormClient(e,"nombre")}}
                        placeholder="Ingrese su nombre o el de su institucion"
                    />
                    <label>Contraseña :</label>
                    <input
                        value={formClient.contraseña}
                        onChange={(e)=>{handleFormClient(e,"contraseña")}}
                        type="password" 
                        placeholder="Ingrese su contraseña"
                    />
                    <label>Telefono :</label>
                    <input
                        value={formClient.telefono}
                        onChange={(e)=>{handleFormClient(e,"telefono")}}
                        placeholder="Ingrese su telefono"
                    />
                    <label>Direccion :</label>
                    <input
                        value={formClient.direccion}
                        onChange={(e)=>{handleFormClient(e,"direccion")}}
                        placeholder="Ingrese su direccion"
                    />
                    <button onClick={handleclickUser}>Crear</button>
                </div>
                :
                <div className="formUser">
                    <label>Nombre :</label>
                    <input placeholder="Ingrese su nombre"/>
                    <label>Contraseña :</label>
                    <input placeholder="Ingrese su contraseña"/>
                    <label>Telefono :</label>
                    <input placeholder="Ingrese su telefono"/>
                    <label>Area :</label>
                    <select>
                        <option>-----------</option>
                        <option>Empastados</option>
                        <option>Imprenta</option>
                        <option>Offset</option>
                    </select>
                    <label>Roles :</label>
                    <div className="rolesContainer">
                        <div className="roles">
                            <input className="checkbox" type="checkbox"/>
                            <label>Admin</label>
                        </div>
                        <div className="roles">
                            <input className="checkbox" type="checkbox"/>
                            <label>Jefe-Area</label>
                        </div>
                        <div className="roles">
                            <input className="checkbox" type="checkbox"/>
                            <label>Trabajador</label>
                        </div>
                        <div className="roles">
                            <input className="checkbox" type="checkbox"/>
                            <label>Recepcion</label>
                        </div>
                        <div className="roles">
                            <input className="checkbox" type="checkbox"/>
                            <label>Director</label>
                        </div>
                        <div className="roles">
                            <input className="checkbox" type="checkbox"/>
                            <label>Encargado</label>
                        </div>
                    </div>
                    <button >Crear</button>
                </div>
            }
        </div>
    )
}