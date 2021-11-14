const CounterReducer = (state, action) => {
  switch (action.type) {
    case 'PLUS': {
      return state + 1;
    }
    case 'PLUS_CUSTOM': {
      return state + action.value;
    }
    case 'MINUS': {
      return state - 1;
    }
    case 'MINUS_CUSTOM': {
      return state - action.value;
    }
    default: return state;
  }
};




export default CounterReducer;