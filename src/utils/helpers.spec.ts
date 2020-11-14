import { expect } from 'chai';
import { getType } from './helpers';

describe('Helper getType', () => {
    it('should return type string', () => {
        expect(getType('')).to.equal('string');
        expect(getType('test')).to.equal('string');
        expect(getType(String('test'))).to.equal('string');
        expect(getType(new String('test'))).to.equal('string');
    });

    it('should return type number', () => {
        expect(getType(0)).to.equal('number');
        expect(getType(-0)).to.equal('number');
        expect(getType(0xff)).to.equal('number');
        expect(getType(-3.142)).to.equal('number');
        expect(getType(Infinity)).to.equal('number');
        expect(getType(-Infinity)).to.equal('number');
        expect(getType(NaN)).to.equal('number');
        expect(getType(Number(42))).to.equal('number');
        expect(getType(new Number(42))).to.equal('number');
    });

    it('should return type boolean', () => {
        expect(getType(true)).to.equal('boolean');
        expect(getType(false)).to.equal('boolean');
        expect(getType(new Boolean(true))).to.equal('boolean');
    });

    it('should return type undefined', () => {
        expect(getType(undefined)).to.equal('undefined');
    });

    it('should return type null', () => {
        expect(getType(null)).to.equal('null');
    });

    it('should return type arguments', () => {
        const testArgs = (function() { return getType(arguments) })();
        expect(testArgs).to.equal('arguments');
    });

    it('should return type function', () => {
        expect(getType(function() {})).to.equal('function');
        expect(getType(new Function)).to.equal('function');
        expect(getType(class {})).to.equal('function');
    });

    it('should return type object', () => {
        expect(getType({})).to.equal('object');
        expect(getType(new Object)).to.equal('object');
    });

    it('should return type object', () => {
        expect(getType(/^(.+)$/)).to.equal('regexp');
        expect(getType(new RegExp("^(.+)$"))).to.equal('regexp');
    });

    it('should return type date', () => {
        expect(getType(new Date)).to.equal('date');
    });

    it('should return type set', () => {
        expect(getType(new Set)).to.equal('set');
    });

    it('should return type map', () => {
        expect(getType(new Map)).to.equal('map');
    });

    it('should return type weakset', () => {
        expect(getType(new WeakSet)).to.equal('weakset');
    });

    it('should return type weakmap', () => {
        expect(getType(new WeakMap)).to.equal('weakmap');
    });
});