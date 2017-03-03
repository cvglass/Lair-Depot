import {CHANGE_CURRENT} from '../constants.jsx';

export const changeCurrent = newCurrent => ({
  type: CHANGE_CURRENT,
  newCurr: newCurrent
})
