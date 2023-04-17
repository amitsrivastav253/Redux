import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { handelIncrement,handelDecrement } from '../actions';

const Redux = () =>{
    const stateCounter = useSelector((state)=>{
        return state.ReducerFunctionForIncrementDecrement
    })

 const dispatch = useDispatch()    
    console.log(stateCounter)
    return(
        <React.Fragment>
        <h1>EXAMPLE OF REDUX</h1>
        <button onClick={()=>{
            dispatch (handelIncrement())
        }}>+</button>
        <button onClick = {()=>{
            dispatch (handelDecrement())
        }}>-</button>
        <p>{stateCounter}</p>
        </React.Fragment>
    )
}
export default Redux