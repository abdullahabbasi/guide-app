import { RECEIVE_ERROR } from '../constants'

export default function (state = null, action) {
  switch (action.type) {
    case RECEIVE_ERROR :
      return action.payload
    default : return state
  }
}
