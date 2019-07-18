import NavigationAction from './navigation.action';

const INITIAL_STATE = {
  active: 'home'
};

const applySelectItem = (state, action) => {
  const { payload: { item } } = action;

  return {
    ...state,
    active: item
  };
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavigationAction.SELECT_ITEM: {
      return applySelectItem(state, action);
    }

    default: return state;
  }
};

export default reducer;