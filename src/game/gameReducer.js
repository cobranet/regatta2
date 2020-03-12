
export const gameReducer=(state,action)=>{
    switch(action.type){
    case "FETCH_SUCCESS":
	return  {data: action.payload,
		 loading: false,
		 error:""  }
	break;
	
    case "FETCH_ERROR":
        return {
	    loading:false,
	    data: {},
	    error: "Something went wrong"
	}
	break;
    default:
	return state
    }
}
