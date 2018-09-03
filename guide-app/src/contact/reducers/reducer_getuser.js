import { GET_USERS } from '../constants'

export default function (state=[], action) {
  switch (action.type) {
    case GET_USERS:   console.log('reducer state'); return action.payload.data;
    default:
      return state;

  }
}
