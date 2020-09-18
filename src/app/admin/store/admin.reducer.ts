import {Action, createReducer, on} from '@ngrx/store';
import { AddPrimary, AddSecondary, LessPrimary, LessSecondary } from './admin.actions';

export interface HomeState {
	primary: number;
	secondary: number;
}

export const initialState: HomeState = {
	primary: 0,
	secondary: 0
};

const featureReducer = createReducer(
	initialState,
	on(AddPrimary, (state, {product}) => ({...state, primary: state.primary++}),
	on(AddSecondary, (state, {product}) => ({...state, secondary: state.secondary++}),
	on(LessPrimary, (state, {product}) => ({...state, primary: state.primary--}),
	on(LessSecondary, (state, {product}) => ({...state, primary: state.secondary--}),
));

export function reducer(state: HomeState, action: Action): any {
	return featureReducer(state, action)
}