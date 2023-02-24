import { createSlice } from "@reduxjs/toolkit";

const initial = [
    {
        nombre: "jesus",
        contraseña: "1234",
        telefono: "11223344",
        area: "Imprenta",
        roles: ["trabajador","jefe_area", "encargado"],
        estado: "activo"
    },{
        nombre: "roberto",
        contraseña: "1111",
        telefono: "00000",
        area: "offset",
        roles: ["trabajador"],
        estado: "activo"
    }
];

const option = {
    name:"usersEmployee",
    initialState: initial,
    reducer:{
        addUser:(state, action)=>{ return (state.push(action.payload))}
    }
}

const usersEmployeeSlice = createSlice(option);


export const selectAllUsersEmployee = state => {return(state.usersEmployee)};


export const {addUser} = usersEmployeeSlice.actions;

export default usersEmployeeSlice.reducer