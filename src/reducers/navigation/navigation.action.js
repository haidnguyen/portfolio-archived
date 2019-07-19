const SELECT_ITEM = '@@navigation/SELECT_ITEM';
const ANIMATE = '@@navigation/ANIMATE';

export default {
  SELECT_ITEM,
  ANIMATE
}

const doSelectItem = item => ({
  type: SELECT_ITEM,
  payload: {
    item
  }
});

const doAnimate = animation => ({
  type: ANIMATE,
  payload: {
    animation
  }
});

export {
  doSelectItem,
  doAnimate
}