import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counterSlice";




const Counter = () => {
    const count = useSelector((state) => state.counter.value); // Example selector
    const dispatch = useDispatch();

    return(
        <div style={{textAlign:'center', marginTop:'50px'}}>
            <h2>Counter: {count}</h2>
            <button className="bt-1" onClick={() => dispatch(increment())}>Increment</button>
            <button className="bt-1" onClick={() => dispatch(decrement())}>Decrement</button>
            <button className="bt-1" onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;