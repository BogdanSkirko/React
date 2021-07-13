import {ADD_TODOS, PUSH_NEW_TODO, SET_LOADING_FALSE, SET_LOADING_TRUE} from "../actionType";

export  const setLoadingTrue = () => ({type:SET_LOADING_TRUE})
export  const setLoadingFalse = () => ({type:SET_LOADING_FALSE})
export const addTodos = (payload) => ({type:ADD_TODOS,payload})
export const pushNewTodo = (payload) => ({type: PUSH_NEW_TODO,payload})