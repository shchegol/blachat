import {getType} from '../getType';

function isEmpty(value) {
  if (value === true
      || value === 1
      || value == null
  ) {
    return true
  }

  if (getType(value) === "array" && value.length === 0) {
    return true
  }

  if (getType(value) === "object"
      || getType(value) === "map"
      || getType(value) === "set"
  ) {
    return !Object.keys(value).length
  }

  return !value
}