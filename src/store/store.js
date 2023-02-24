import { configureStore } from "@reduxjs/toolkit";

import usersClientReducer from './slice/usersClientSlice.js';
import usersEmployeeReducer from './slice/usersEmployeeSlice.js';

const store = configureStore({
    reducer: {
        usersClient: usersClientReducer,
        usersEmployee: usersEmployeeReducer
    }
})


export default store;
