const chai       =      require('chai');
const expect   =        chai.expect;
const googlesheet =     require('../lib/google_sheets');


describe('Google sheet', () =>{
    
    it.skip('should be able to fetch data', async () =>{
        const sheetID = '1Kjn8sURAAh334ZykNKsTcd4UCxrx21Qe5KBYiuNZuyE'
        const range = "Sheet1!B2:D"
        const output =  await googlesheet.readGoogleSheet(sheetID, range) 

        expect(output).to.be.not.null;
    });

    it.skip('should have 3 columns of Date, Time, Activity', async () =>{
        const sheetID = '1Kjn8sURAAh334ZykNKsTcd4UCxrx21Qe5KBYiuNZuyE'
        const range = "Sheet1!B2:D5"
        const output =  await googlesheet.readGoogleSheet(sheetID, range) 
        expect(output[0][0]).to.be.equal('Date');
        expect(output[0][1]).to.be.equal('Time ');
        expect(output[0][2]).to.be.equal('Activity');
    });

});