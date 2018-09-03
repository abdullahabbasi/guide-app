import { GET_USERS } from '../constants'
import axios from 'axios'

export function getUsers () {
    const request = axios.get('https://jsonplaceholder.typicode.com/users')
    return {
      type: GET_USERS,
      payload: request
    }
}
