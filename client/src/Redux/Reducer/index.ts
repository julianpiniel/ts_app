import { ActionType } from '../Actions/action-types';
import { Action } from '../Actions';

const initialState: { [key: string]: string[] } = {
	todos: [],
};

const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.ADD_TODO: {
			if (!state.todos.includes(action.payload)) {
				return {
					...state,
					todos: [...state.todos, action.payload],
				};
			}
			break;
		}
		case ActionType.REMOVE_TODO: {
			let newTodos: string[] = state.todos.filter(
				(todo) => todo !== action.payload
			);
			return {
				...state,
				todos: newTodos,
			};
		}
		default:
			return state;
	}
};

export default reducer;
