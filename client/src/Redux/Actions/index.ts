import { ActionType } from './action-types';
import { Dispatch } from 'redux';

interface AddTodo {
	type: ActionType.ADD_TODO;
	payload: string;
}

interface RemoveTodo {
	type: ActionType.REMOVE_TODO;
	payload: string;
}

export type Action = AddTodo | RemoveTodo;

export const addTodo = (todo: string) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.ADD_TODO, payload: todo });
	};
};

export const removeTodo = (todo: string) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.REMOVE_TODO, payload: todo });
	};
};
