const CounterReducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'plus': {
			return state + 1;
		}
		case 'minus': {
			return state - 1;
		}
		case 'CUSTOM_PLUS': {
			return state + action.value;
		}
		default: return state;
	}
};

export default CounterReducer;

// 넘어올 때
// {type: 'CUSTOM_PLUS', value: '10'}