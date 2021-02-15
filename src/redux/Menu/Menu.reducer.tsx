import { OPEN, CLOSE, MenuState } from './Menu.types';

const INITIAL_STATE: MenuState = {
  open: false,
};

const reducer = (state = INITIAL_STATE, action: any): MenuState => {
  switch (action.type) {
    case OPEN:
      return {
        ...state, open: state.open!,
      };

    case CLOSE:
      return {
        ...state, open: state.open!,
      };

    default: return state;
  }
};

export default reducer;