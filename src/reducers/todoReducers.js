const initialData = {
    list : []
}

// const [list ,setList] = useState([]);

const todoReducers = (state=initialData ,action) =>{
   
switch(action.type){
    case "ADD_TODO":
    const {id ,data} = action.payload;
    const updatedList = state.list;
    updatedList.push({data: data, id:id});   
    return{
        ...state,
        list:updatedList
    }

    case "DELETE_TODO":
       const newList = state.list.filter((elem)=>elem.id !== action.id )
    
        return{
            ...state,
            list:newList
        }

         case "REMOVE_TODO":
            return{
                ...state,
                list:[]
            }
   default:return state;
}
}
export default todoReducers;