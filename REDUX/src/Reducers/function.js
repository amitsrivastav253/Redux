const initialState = 100 ;
//this function return state value as per : function calling

const ReducerFunctionForIncrementDecrement = (state = initialState,action) =>{
     switch(action.type){
        case "increment" :
            return state = state +1;
            case "decrement" :
                return state = state -1;
                default :
                return state;
     }
}
export default ReducerFunctionForIncrementDecrement;