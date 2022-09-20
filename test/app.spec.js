const { add, sub } = require('../src/app')
const expect = require('chai').expect

//BDD

describe('Suite 1', () => {
    beforeEach(() => {
        console.log("before Each")
    });

    afterEach(() => {
        console.log("after Each")
    });

    before(() => {
        console.log("before")
    });

    after(() => {
        console.log("after")
    });
    it('add(2,3) should return 5', () => {
        expect(add(2, 3)).to.be.equal(50)

    })

})

context('Suite 2', () => {
    specify('add(3,3) should return 6', () => {
        expect(add(3, 3)).to.be.equal(6)

    })
})

//TDD

const { suite, test, suiteSetup, suiteTeardown, setup, teardown } = require('mocha')

suite('Suite 3', () => {
    suiteSetup(() => {
        console.log("suite setup")
    });

    suiteTeardown(() => {
        console.log("suite teardown")
    });

    setup(() => {
        console.log("suite")
    });

    teardown(() => {
        console.log("teardown")
    });
    test('add(5,5) should return 10', () => {
        expect(add(5, 5)).to.be.equal(10)

    })

})