import { createSlice } from "@reduxjs/toolkit";

const initialDataClient = [
    {
        nombre: "jesus",
        contraseña: "1234",
        telefono: "11223344",
        direccion: "avaroa # 127",
        estado: "activo"
    },{
        nombre: "fernando",
        contraseña: "666777",
        telefono: "0000000",
        direccion: "avaroa # 127",
        estado: "activo"
    }
];

const options = {
    name:"usersClient",
    initialState: initialDataClient,
    reducers:{
        addUser: (state,action) => {state.push(action.payload)}
    }
}

const usersClientSlice = createSlice(options);


///-------------------------SELECTORS-------------------------///

export const selectAllUsersClient = state => {
    return (state.usersClient)
}


export const {addUsers} = usersClientSlice.actions;
export default usersClientSlice.reducer;