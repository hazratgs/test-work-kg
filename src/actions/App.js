import { CHANGE_ACTIVE_REVIEW } from '../constants/App'

export function changeActiveReview (id) {
  return {
    type: CHANGE_ACTIVE_REVIEW,
    payload: id
  }
}
