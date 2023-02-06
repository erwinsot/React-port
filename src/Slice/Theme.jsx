import {createSlice} from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name: 'counter',
    initialState:{ value:"",
                luz: 0.5,
                cam: false,
                size:"desktop",
                intensity:0,
                luz2:0.3,
                path:false

 },
    reducers: {
        
        chCam(state){
            state.cam=true
        },
        chCam2(state){
            state.cam=false
        },
        chMobile(state){
            state.size="mobile"
        },
        chDesktop(state){
            state.size="desktop"
        },
        chTablet(state){
            state.size="tablet"
        },
        chIntesity(state){
            state.intensity=0
            state.luz=0.5
            state.luz2=0.3
        },
        chIntesity2(state){
            state.intensity=0.28
            state.luz=0
            state.luz2=0
        },
        chPath(state){
            state.path=true
        },
        chPath2(state){
            state.path=false
        },

    },
  })

  export const { dark, sun, chCam, chCam2, chSize, chDesktop,chMobile,chTablet, chIntesity, chIntesity2, chPath,chPath2 } = counterSlice.actions
export default counterSlice.reducer