import { createSlice } from "@reduxjs/toolkit";
import { getCat } from "../../api/home/home";


const home=createSlice({
    name:"home",
    initialState: {
        data:[],
    },
    reducers:{
       
    },
    extraReducers:(builder)=>{
        builder.addCase(getCat.pending,(state,action)  =>{
            state.loading = true
        }),
        builder.addCase(getCat.fulfilled,(state,action)  =>{
            // console.log(action.payload)
            state.data=action.payload
        }),
        builder.addCase(getCat.rejected,(state,action)  =>{
            state.loading = true
        })

    }
})
export default home.reducer
// export const {}=home.actions