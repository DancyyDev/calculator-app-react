import React from 'react'
import { ACTION } from './App'

function OperationButtons({dispatch, digit}) {
    return (
        <button onClick={() => dispatch( {type: ACTION.CHOOSE_OPERATION, payload: {digit}})}>
            {digit}
        </button>
      )
}

export default OperationButtons