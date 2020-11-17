import {expect} from 'chai';
import HTTP from './HTTP';
import {APIInstance} from './HTTP';
import {HOST} from "../constants";

// todo дописать как будет готово API
describe('HTTP', () => {
    it('should has required keys in METHODS', () => {
        expect(HTTP.METHODS)
            .to.have.all.keys('GET', 'POST', 'PUT', 'DELETE')
    })

    it('should has host', () => {
        expect(APIInstance.host)
            .to.be.equal(HOST)
    })
})