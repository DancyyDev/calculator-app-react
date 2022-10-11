import './App.css';
import { useReducer } from 'react';
import NumButtons from './src/components/NumButtons';
import OperationButtons from './src/components/OperationButtons';

export const ACTION = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}){
    switch(type) {
      case ACTION.ADD_DIGIT:
        if(payload.digit === '0' && state.currOutput === '0'){
          return state
        }
        if(payload.digit === '.' && state.currOutput.includes('.')){
          return state
        }
        return {
          ...state,
          currOutput: `${currOutput || ''}${payload.digit}`
        }
    }
}

function App() {
  const [{currOutput, prevOutput, operation}, dispatch] = useReducer(reducer, {})

  return (
    <div className="calculator-grid">
      <div className='output'>
        <div className='prev-output'>{prevOutput} {operation}</div>
        <div className='curr-output'>{currOutput}</div>
      </div>
      <button className='span-two'>AC</button>
      <button>del</button>
      <OperationButtons digit='/' dispatch={dispatch}/>
      <NumButtons digit='1' dispatch={dispatch}/>
      <NumButtons digit='2' dispatch={dispatch}/>
      <NumButtons digit='3' dispatch={dispatch}/>
      <OperationButtons digit='*' dispatch={dispatch}/>
      <NumButtons digit='4' dispatch={dispatch}/>
      <NumButtons digit='5' dispatch={dispatch}/>
      <NumButtons digit='6' dispatch={dispatch}/>
      <OperationButtons digit='-' dispatch={dispatch}/>
      <NumButtons digit='7' dispatch={dispatch}/>
      <NumButtons digit='8' dispatch={dispatch}/>
      <NumButtons digit='9' dispatch={dispatch}/>
      <OperationButtons digit='+' dispatch={dispatch}/>
      <NumButtons digit='.' dispatch={dispatch}/>
      <NumButtons digit='0' dispatch={dispatch}/>
      <button className='span-two'>=</button>
    </div>
  );
}

export default App;
