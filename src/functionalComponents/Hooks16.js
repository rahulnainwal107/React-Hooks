import React, { useReducer } from 'react'

// simple useReducer using object as a state and action has it's type.
const initialState = {
	firstCounter: 0
}
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { firstCounter: state.firstCounter + 1 }
		case 'decrement':
			return { firstCounter: state.firstCounter - 1 }
		case 'reset':
			return initialState
		default:
			return state
	}
}
function Hooks16() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count value = {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    )
}

export default Hooks16
