import {configureStore} from '@reduxjs/toolkit'
import jockSlice from '../component/jockSlice'


const store=configureStore({
    reducer:{

        jockes:jockSlice.reducer
 
    }
})

export default store