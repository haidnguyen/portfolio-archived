import NavigationAction from './navigation.action';
import { uniq } from 'ramda';

const INITIAL_STATE = {
  active: 'home',
  animation: []
};

const applySelectItem = (state, action) => {
  const { payload: { item } } = action;

  return {
    ...state,
    active: item
  };
};

const applyAnimate = (state, action) => {
  const { payload: { animation } } = action;

  return {
    ...state,
    animation: uniq([...state.animation, animation])
  };
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavigationAction.SELECT_ITEM: {
      return applySelectItem(state, action);
    }

    case NavigationAction.ANIMATE: {
      return applyAnimate(state, action);
    }

    default: return state;
  }
};

export default reducer;