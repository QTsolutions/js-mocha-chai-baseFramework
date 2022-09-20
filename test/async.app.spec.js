const expect = require('chai').expect
const axios = require('axios')

describe('async test suite', function () {

    let count = 0;
    it('promise based way', function () {
        console.log('retries attempt:', count);
        count++;
        // to mention no of reties need to be done before declaring a test case 'failed'
        this.retries(2)
        // to mention the timeout duration in ms before any test case failed
        this.timeout(20)
        return axios.get('https://reqres.in/api/users/2').then(res => {
            expect(res.data.data.email).to.equal('janet.weaver@reqres.in')
        })
    });

    //skip keyword used to make any testcase skip ,alternate way is to used 'only' keyword as well
    it.only('test 2', function () {
        console.log('test2')
    });

    it('done way', function (done) {
        axios.get('https://reqres.in/api/users/2').then(res => {
            expect(res.data.data.email).to.equal('janet.weaver@reqres.in')
            done()
        }).catch(err => {
            done(err)
        })
    });

    it('async await way', async function () {
        const res = await axios.get('https://reqres.in/api/users/2')
        expect(res.data.data.email).to.equal('janet.weaver@reqres.in')
    });
})