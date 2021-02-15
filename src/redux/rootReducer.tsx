import { combineReducers } from 'redux';

import menuReducer from './Menu/Menu.reducer';

const rootReducer = combineReducers({
  menu: menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>