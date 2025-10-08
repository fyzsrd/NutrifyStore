import { createSlice } from "@reduxjs/toolkit";


const storedAuth = JSON.parse(localStorage.getItem("auth") || "{}");
const initialState ={
    user:storedAuth.user || null,
    token:storedAuth.token || null,
    isAuthenticated: storedAuth.token ? true : false
}
 const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            const {user,token}=action.payload;
            state.user= user;
            state.token =token;
            state.isAuthenticated = true;
            localStorage.setItem("auth",JSON.stringify({user,token}))
        },
        logout:(state)=>{
            state.user=null;
            state.token=null,
            state.isAuthenticated=null,
            localStorage.removeItem("auth")
        }

    }

})


export const { setCredentials,logout}=authSlice.actions;
export default authSlice.reducer


export const selectCurrentUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;