import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import { useDispatch, useSelector } from 'react-redux'


export const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

        return (
            <p>
                Clicked: {count} times
                <button onClick={() => dispatch(increment())}>
                    +
                </button>
                <button onClick={() => dispatch(decrement())}>
                    -
                </button>
            </p>
        );
}

export default Counter;
