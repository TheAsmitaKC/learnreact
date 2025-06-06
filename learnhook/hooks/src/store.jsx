const ADD_TASK="task/add"
const initialstate={
    task: [],
}
const taskReducer = (state= initialstate,action)=>{
switch(action.type){
case ADD_TASK:
    return{
        ...state,
        task :[...state.task,action.payload],
    }
    

    default:
    break;
}
}
