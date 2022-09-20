const expect = require('chai').expect
const assert = require('chai').assert
const should = require('chai').should()

describe('assertion Example', () => {

    const array = [30, 40, 50]

    it('assert Example -used for TDD', () => {
        assert.ok(true)
        assert.include(array, 30)
        assert.lengthOf(array, 4)
    })

    it('expect used in BDD', () => {
        expect(array).to.have.lengthOf(3)
        expect(array).to.be.a('array')

    })
    it('should used in BDD', () => {
        array.should.include(60)
    })

})