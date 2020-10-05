import {getType} from '../getType';

/**
 * Get the first value of the array.
 * @param {*[]} list - any array.
 * @return {*} - the first value of the array.
 */
export function first(list) {
  if (getType(list) !== "array") {
    return undefined
  }

  return list[0]
}