const CounterReducer = (state, action) => {
  switch (action.type) {
    case 'plus': {
      return state + 1;
    }
    case 'minus': {
      return state -1;
    }
    case 'CUSTOM_PLUS': {
      return state + action.value;
    }
    case 'CUSTOM_MINUS': {
      return state - action.value;
    }
    default: return state;
  }; 
};

export default CounterReducer;