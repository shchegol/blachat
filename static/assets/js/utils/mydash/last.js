import {getType} from '../getType';

/**
 * Get the last value of the array.
 * @param {*[]} list - any array.
 * @return {*} - the last value of the array.
 */
export function last(list) {
  if (getType(list) !== "array") {
    return undefined
  }

  return list[list.length - 1]
}