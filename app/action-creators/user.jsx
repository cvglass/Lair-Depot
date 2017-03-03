import {GET_USERINFO} from '../constants.jsx';

export const getUserInfo = (userInfo) => {
  return {
    type: GET_USERINFO,
    info: userInfo
  }
}
