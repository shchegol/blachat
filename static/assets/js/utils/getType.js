/**
 * Check the value type.
 * @param {*} value - checked value.
 * @return {string} - value type.
 */

export function getType(value) {
  const regex = /^\[object (\S+?)\]$/;
  const matches = Object.prototype.toString.call(value).match(regex) || [];

  return (matches[1] || 'undefined').toLowerCase();
}

/**
 * @example
 * type(''); // "string"
 * type('hello'); // "string"
 * type(String('hello')); // "string"
 * type(new String('hello')); // "string"
 *
 * type(0); // "number"
 * type(-0); // "number"
 * type(0xff); // "number"
 * type(-3.142); // "number"
 * type(Infinity); // "number"
 * type(-Infinity); // "number"
 * type(NaN); // "number"
 * type(Number(53)); // "number"
 * type(new Number(53)); // "number"
 *
 * type(true); // "boolean"
 * type(false); // "boolean"
 * type(new Boolean(true)); // "boolean"
 *
 * type(undefined); // "undefined"
 *
 * type(null); // "null"
 *
 * type(Symbol()); // "symbol"
 * type(Symbol.species); // "symbol"
 *
 * type([]); // "array"
 * type(Array(5)); // "array"
 *
 * (function() { return type(arguments) })(); // "arguments"
 *
 * type(function() {}); // "function"
 * type(new Function); // "function"
 *
 * type(class {}); // "function"
 *
 * type({}); // "object"
 * type(new Object); // "object"
 *
 * type(/^(.+)$/); // "regexp"
 * type(new RegExp("^(.+)$")); // "regexp"
 *
 * type(new Date); // "date"
 * type(new Set); // "set"
 * type(new Map); // "map"
 * type(new WeakSet); // "weakset"
 * type(new WeakMap); // "weakmap"
 */