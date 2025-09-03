import { configureStore } from "@reduxjs/toolkit";
import DataSlice from '../slice/DataSlice'

const Store = configureStore({
    reducer : {DataSlice}
})

export default Store;