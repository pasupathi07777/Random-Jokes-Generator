import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    joke: "No Joke",
    catogory:false,
    result:false,
    lodding:false
}




const fetchData = createAsyncThunk("zz", (state) => {
    return axios.get(`https://api.chucknorris.io/jokes/random?category=${state}`)
        .then((e) => {
            return e.data.value
           

        }).catch((e) => {
            console.log(e.response.data.error
            )
          
            
            // return <p>{` Jokes for ${state} Not found.` }</p>
             throw new Error(`Jokes not found.`)

        })

})
const jockSlice = createSlice({
    name: "joke",
    initialState: initialState,
  
    extraReducers: (state) => {
        state.addCase(fetchData.pending, (state, action) => {
            console.log("pending")
            state.lodding=true
            state.result=false
            
        }).addCase(fetchData.fulfilled, (state, action) => {
            state.joke = action.payload
            state.catogory=false  
            state.lodding=false  
            state.result=true


        }).addCase(fetchData.rejected,(state,action)=>{
            state.joke=` Jokes Not found.` 
            state.catogory=true
            state.lodding=false
            state.result=false
        })
    }



})

export { fetchData }
export default jockSlice 