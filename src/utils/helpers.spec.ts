import { getType } from './helpers';

describe('Helper getType', () => {
  it('should return type string', () => {
    expect(getType('')).toEqual('string');
    expect(getType('test')).toEqual('string');
    expect(getType(String('test'))).toEqual('string');
  });

  it('should return type number', () => {
    expect(getType(0)).toEqual('number');
    expect(getType(-0)).toEqual('number');
    expect(getType(0xff)).toEqual('number');
    expect(getType(-3.142)).toEqual('number');
    expect(getType(Infinity)).toEqual('number');
    expect(getType(-Infinity)).toEqual('number');
    expect(getType(NaN)).toEqual('number');
    expect(getType(Number(42))).toEqual('number');
  });

  it('should return type boolean', () => {
    expect(getType(true)).toEqual('boolean');
    expect(getType(false)).toEqual('boolean');
  });

  it('should return type undefined', () => {
    expect(getType(undefined)).toEqual('undefined');
  });

  it('should return type null', () => {
    expect(getType(null)).toEqual('null');
  });

  it('should return type function', () => {
    expect(getType(() => {})).toEqual('function');
    expect(getType(class {})).toEqual('function');
  });

  it('should return type object', () => {
    expect(getType({})).toEqual('object');
  });

  it('should return type object', () => {
    expect(getType(/^(.+)$/)).toEqual('regexp');
    expect(getType(new RegExp('^(.+)$'))).toEqual('regexp');
  });

  it('should return type date', () => {
    expect(getType(new Date())).toEqual('date');
  });

  it('should return type set', () => {
    expect(getType(new Set())).toEqual('set');
  });

  it('should return type map', () => {
    expect(getType(new Map())).toEqual('map');
  });

  it('should return type weakset', () => {
    expect(getType(new WeakSet())).toEqual('weakset');
  });

  it('should return type weakmap', () => {
    expect(getType(new WeakMap())).toEqual('weakmap');
  });
});
