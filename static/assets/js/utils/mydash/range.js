export function range(start, end, step, isRight) {
  let index = -1;
  let length, result;


  if (end === undefined) {
    end = start
    start = 0
  }

  step = step === undefined ? (start < end ? 1 : -1) : step
  length = (end - start) / (step || 1)
  result = new Array(length)

  while (length--) {
    result[isRight ? length : ++index] = start
    start += step
  }

  return result
}