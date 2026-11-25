import { createSlice } from "@reduxjs/toolkit";



const intstudents = [
    { id: 1, name:" Mohan Kunjam", marks: 90, course: "Python" },
    { id: 2, name: "Mohan Kunjam", marks: 70, course: "Python" },
    { id: 1, name: "Mohan Kunjam", marks: 80, course: "Python" },
    { id: 1, name: "Mohan Kunjam", marks: 60, course: "Python" },
    { id: 1, name: "Mohan Kunjam", marks: 90, course: "Python" }
]

export const creatStudentSlice = createSlice({
    name: "student",
    initialState: {
        students:intstudents
    },
    reducers: {
        addStudents:(state, action)=>{
            state.students.push(action.payload)
        },
        deleteStudents:(state, action)=>{
            state.students = state.students.filter(student=> student.id !== action.payload)
        }
    }
})

export const { addStudents, deleteStudents } = creatStudentSlice.actions;
export default creatStudentSlice.reducer;