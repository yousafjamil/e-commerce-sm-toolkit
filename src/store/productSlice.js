
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// const initialState = []  
 export const STATUS = Object.freeze({
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error"

})


const productSlice = createSlice({
    name: 'Product',
    initialState: {
        status: STATUS,
        data: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, actions) => {
            state.status = STATUS.LOADING
        })
            .addCase(fetchProduct.fulfilled, (state, actions) => {
                state.data = actions.payload
                state.status=STATUS.IDLE
            }).
        addCase(fetchProduct.rejected, (state, actions) => {
            state.status = STATUS.ERROR
        })

    }

})


// thunk
export const fetchProduct = createAsyncThunk('/get/product', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data;
})




export default productSlice.reducer;