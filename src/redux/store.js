import { configureStore } from "@reduxjs/toolkit";
import createStudentSlice from "../feature/studentSlice";

export const store = configureStore({
    reducer: { createStudentSlice }
});


