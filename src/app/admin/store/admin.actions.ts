import {createAction, props} from '@ngrx/store'

export const AddPrimary = createAction('[ADMIN]AddPrimary', props<{primary: number}>());
export const AddSecondary = createAction('[ADMIN]AddSecondary', props<{secondary: number}>());
export const LessPrimary = createAction('[ADMIN]LessPrimary', props<{primary: number}>());
export const LessSecondary = createAction('[ADMIN]LessSecondary', props<{secondary: number}>());