import {createSlice} from '@reduxjs/toolkit'


const chCamSlice = createSlice({
    name: 'chCam',
    initialState:{ 
                cam: true },
    reducers: {
        bandera(state){
            state.cam=false;
        }
     },
  })

  export const {bandera} = chCamSlice.actions
export default chCamSlice.reducer