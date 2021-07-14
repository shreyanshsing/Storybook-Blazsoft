import {createSlice} from "@reduxjs/toolkit";
import {TeacherList,StudentList} from "../../../../App/data/data";

export const AutoCompleteReducer = createSlice({
    name:'autocomplete',
    initialState : {
        teacherList : TeacherList,
        studentList : StudentList,
        selectedTeachers : []
    },
    reducers : {
        setTeacherList : (state,action) => {
            state.teacherList = action.payload;
        },
        setSelectedTeacher : (state,action) => {
            state.selectedTeachers = [...state.selectedTeachers,action.payload];
        }
    }
});

export default AutoCompleteReducer.reducer;

export const {setTeacherList,setSelectedTeacher} = AutoCompleteReducer.actions;

export const fetchTeacherData  = () => dispatch => {
    dispatch(setTeacherList(TeacherList));
}

export const selectorTeacher = state => state.autocompeleteReducer.teacherList;

export const selectorTeachers = state => state.autocompeleteReducer.selectedTeachers;