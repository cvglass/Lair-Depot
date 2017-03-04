import {CHANGE_NAV_VIEW} from '../constants';

export const changeView = newView => ({
  type: CHANGE_NAV_VIEW,
  newView: newView
})
