import {
  CHANGE_ACTIVE_REVIEW,
  ACTIVE_NEXT_REVIEW
} from '../constants/App'

export function changeActiveReview (id) {
  return {
    type: CHANGE_ACTIVE_REVIEW,
    payload: id
  }
}

export function activeNextReview (id) {
  return {
    type: ACTIVE_NEXT_REVIEW,
    payload: id
  }
}
