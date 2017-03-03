import {CHANGE_NAV_VIEW} from '../constants.jsx';

export const changeView = newView => ({
  type: CHANGE_NAV_VIEW,
  newView: newView
})
