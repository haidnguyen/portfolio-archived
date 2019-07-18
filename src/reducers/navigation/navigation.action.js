const SELECT_ITEM = '@@navigation/SELECT_ITEM';

export default {
  SELECT_ITEM
}

const doSelectItem = item => ({
  type: SELECT_ITEM,
  payload: {
    item
  }
});

export {
  doSelectItem
}