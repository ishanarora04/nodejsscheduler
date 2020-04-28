const chai = require('chai');
const expect = chai.expect;
const Twillio = require('../lib/twillio');

describe('Twillio', ()=>{
    it('send sms', async ()=>{
        const client = new Twillio();
        const output = await client.send_sms('This is my first msg');
        expect(output.errorMessage).to.be.null;
    })
});