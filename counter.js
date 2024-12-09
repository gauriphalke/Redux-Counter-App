import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counterSlice";




const Counter = () => {
    const count = useSelector((state) => state.Counter.value);
    const dispatch = useDispatch();


    return(
        <div style={{textAlign:'center', marginTop:'50px'}}>
            <h1>Counter:{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;
